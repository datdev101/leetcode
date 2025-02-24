function isAlphanumeric(char: string) {
  const code = char.charCodeAt(0);
  if (
    (code >= 97 && code <= 122) || // (a-z)
    (code >= 65 && code <= 90) || // (A-Z)
    (code >= 48 && code <= 57) // (0-9)
  )
    return true;
  return false;
}

function isPalindrome(s: string): boolean {
  for (let start = 0, end = s.length - 1; start < end; ) {
    const isValidStartChar = isAlphanumeric(s[start]);
    const isValidEndChar = isAlphanumeric(s[end]);

    if (isValidStartChar && isValidEndChar) {
      if (s[start].toLowerCase() != s[end].toLowerCase()) {
        return false;
      }
      start++;
      end--;
    } else {
      if (!isValidStartChar) start++;
      if (!isValidEndChar) end--;
    }
  }

  return true;
}

// const str = "A man, a plan, a canal: Panama";
// console.log(isPalindrome(str));
