function minZeroArray(nums: number[], queries: number[][]): number {
  function checkDiffArr(k: number) {
    const diff = Array(nums.length + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [left, right, value] = queries[i];
      diff[left] += value;
      diff[right + 1] -= value;
    }

    for (let i = 0, sum = 0; i < nums.length; i++) {
      sum += diff[i];
      if (sum < nums[i]) return false;
    }

    return true;
  }

  let left = 0,
    right = queries.length;

  if (!checkDiffArr(right)) return -1;

  while (left <= right) {
    const mid = right + ((left - right) >> 1);
    if (checkDiffArr(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const nums = [4, 3, 2, 1],
  queries = [
    [1, 3, 2],
    [0, 2, 1],
  ];
console.log(minZeroArray(nums, queries));
