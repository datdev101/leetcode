function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0,
    right = letters.length - 1;
  const targetCode = target.charCodeAt(0);

  while (left <= right) {
    const mid = right - ((right - left) >> 1);
    const mCode = letters[mid].charCodeAt(0);
    if (mCode <= targetCode) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left < letters.length ? letters[left] : letters[0];
}

const letters = ["c", "f", "j"],
  target = "c";
console.log(nextGreatestLetter(letters, target));
