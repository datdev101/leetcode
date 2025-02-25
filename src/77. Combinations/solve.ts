function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  function dfs(path: number[] = [], startNum = 1) {
    if (path.length == k) {
      result.push([...path]);
      return;
    }

    for (let i = startNum; i <= n; i++) {
      path.push(i);
      dfs(path, i + 1);
      path.pop();
    }
  }

  dfs();
  return result;
}

console.log(combine(1, 1));
