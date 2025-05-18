import { checkTestcases } from "../_utils/helper";

function permute(nums: number[]): number[][] {
  const minNum = -10;
  const maxNum = 10;
  const container = Array(maxNum - minNum + 1).fill(0);

  for (const num of nums) {
    container[num - minNum]++;
  }

  const result: number[][] = [];

  function dfs(path: number[]) {
    if (path.length >= nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = minNum; i <= maxNum; i++) {
      if (container[i - minNum] == 0) continue;

      container[i - minNum]--;
      path.push(i);
      dfs(path);
      path.pop();
      container[i - minNum]++;
    }
  }

  dfs([]);

  return result;
}

checkTestcases(
  [
    {
      input: [[1, 2, 3]],
      expected: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    },
    {
      input: [[0, 1]],
      expected: [
        [0, 1],
        [1, 0],
      ],
    },
    {
      input: [[1]],
      expected: [[1]],
    },
  ],
  permute,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
