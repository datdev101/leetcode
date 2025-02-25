function permute(nums: number[]): number[][] {
  const path: number[] = [];
  const visited = Array(nums.length).fill(0);
  const result: number[][] = [];

  function dfs() {
    if (path.length == nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;

      path.push(nums[i]);
      visited[i] = 1;
      dfs();
      path.pop();
      visited[i] = 0;
    }
  }

  dfs();
  return result;
}

console.log(JSON.stringify(permute([1, 2, 3])));
