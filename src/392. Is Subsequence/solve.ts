function isSubsequence(s: string, t: string): boolean {
  let counter = 0;
  for (let i = 0; i < t.length && counter < s.length; i++) {
    if (t[i] == s[counter]) counter++;
  }
  return counter == s.length;
}

const s = "axc",
  t = "ahbgdc";
console.log(isSubsequence(s, t));
