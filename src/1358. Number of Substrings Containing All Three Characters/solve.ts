function numberOfSubstrings(s: string): number {
  const tracker: Record<string, number> = {
    a: 0,
    b: 0,
    c: 0,
  };

  let result = 0;
  for (let right = 0, left = 0; right < s.length; right++) {
    tracker[s[right]]++;
    while (tracker["a"] > 0 && tracker["b"] > 0 && tracker["c"] > 0) {
      result += s.length - right;
      tracker[s[left]]--;
      left++;
    }
  }

  return result;
}

const s = "aaacb";
console.log(numberOfSubstrings(s));
