function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  candidates.sort((a, b) => a - b);

  function dfs(startIndex: number, target: number) {
    if (target == 0) {
      result.push([...path]);
      return;
    }

    if (startIndex >= candidates.length || target < candidates[startIndex])
      return;

    dfs(startIndex + 1, target);
    path.push(candidates[startIndex]);
    dfs(startIndex, target - candidates[startIndex]);
    path.pop();
  }

  dfs(0, target);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
