function lengthOfLongestSubstring(s: string): number {
  const window = new Map<number, number>();
  let result = 0;

  for (let right = 0, left = 0; right < s.length; right++) {
    const rCode = s.charCodeAt(right);
    let counter = (window.get(rCode) ?? 0) + 1;
    window.set(rCode, counter);

    while (counter > 1) {
      const lCode = s.charCodeAt(left);
      const value = window.get(lCode)!; // value only 2 or 1
      if (value > 1) {
        window.set(lCode, value - 1);
        counter = 0;
      } else {
        window.delete(lCode);
      }
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
