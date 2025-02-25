function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function dfs(countLeft = 0, countRight = 0, path = "") {
    if (countLeft < countRight) return;
    if (countLeft == countRight && countLeft == n) {
      return result.push(path);
    }

    if (countLeft < n) {
      dfs(countLeft + 1, countRight, path + "(");
    }
    if (countRight < n) {
      dfs(countLeft, countRight + 1, path + ")");
    }
  }

  dfs();
  return result;
}

console.log(generateParenthesis(3));
