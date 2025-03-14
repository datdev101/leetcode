function isVowel(tracker: Record<string, number>, c: string) {
  return tracker[c] !== undefined;
}

function isValidWindow(
  tracker: Record<string, number>,
  counterK: number,
  k: number
) {
  if (counterK !== k) return false;
  if (
    tracker["a"] <= 0 ||
    tracker["e"] <= 0 ||
    tracker["i"] <= 0 ||
    tracker["o"] <= 0 ||
    tracker["u"] <= 0
  )
    return false;
  return true;
}

function countOfSubstrings(word: string, k: number): number {
  const n = word.length;
  const nextConsonants: number[] = Array(n).fill(n);
  const tracker: Record<string, number> = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (let i = n - 1, storedIndex = n; i >= 0; i--) {
    nextConsonants[i] = storedIndex;
    if (!isVowel(tracker, word[i])) {
      storedIndex = i;
    }
  }

  let counterK = 0;
  let result = 0;

  for (let right = 0, left = 0; right < word.length; right++) {
    if (isVowel(tracker, word[right])) {
      tracker[word[right]]++;
    } else {
      counterK++;
    }

    while (counterK > k) {
      if (isVowel(tracker, word[left])) {
        tracker[word[left]]--;
      } else {
        counterK--;
      }
      left++;
    }

    while (right - left >= 4 + k && isValidWindow(tracker, counterK, k)) {
      result += nextConsonants[right] - right;
      if (isVowel(tracker, word[left])) {
        tracker[word[left]]--;
      } else {
        counterK--;
      }
      left++;
    }
  }

  return result;
}

const word = "iqeaouqi",
  k = 2;
console.log(countOfSubstrings(word, k));
