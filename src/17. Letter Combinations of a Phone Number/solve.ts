function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const mapper: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const result: string[] = [];

  function dfs(startIndex = 0, path = "") {
    if (path.length == digits.length) {
      result.push(path);
      return;
    }

    for (const char of mapper[digits[startIndex]]) {
      dfs(startIndex + 1, path + char);
    }
  }

  dfs();
  return result;
}

console.log(letterCombinations("23"));
