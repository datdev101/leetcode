function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;

  function dfs(i: number, j: number, wordIndex: number) {
    //   console.log(i, j, wordIndex);
    if (wordIndex == word.length - 1) {
      return board[i][j] == word[wordIndex];
    }
    if (board[i][j] != word[wordIndex]) {
      return false;
    }

    const tempChar = board[i][j];
    board[i][j] = "0";

    if (i >= 1 && board[i - 1][j] != "0" && dfs(i - 1, j, wordIndex + 1)) {
      //   console.log(i, j, wordIndex);
      return true;
    }
    if (i < m - 1 && board[i + 1][j] != "0" && dfs(i + 1, j, wordIndex + 1)) {
      //   console.log(i, j, wordIndex);
      return true;
    }
    if (j >= 1 && board[i][j - 1] != "0" && dfs(i, j - 1, wordIndex + 1)) {
      //   console.log(i, j, wordIndex);
      return true;
    }
    if (j < n - 1 && board[i][j + 1] != "0" && dfs(i, j + 1, wordIndex + 1)) {
      //   console.log(i, j, wordIndex);
      return true;
    }

    board[i][j] = tempChar;
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
