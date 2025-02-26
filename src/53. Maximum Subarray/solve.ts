function divideAndConquerSolution(nums: number[]) {
  function maxCrossSum(l: number, m: number, r: number) {
    let maxLeftSum = Number.MIN_SAFE_INTEGER;
    for (let i = m, sum = 0; i >= l; i--) {
      sum += nums[i];
      maxLeftSum = Math.max(maxLeftSum, sum);
    }

    let maxRightSum = Number.MIN_SAFE_INTEGER;
    for (let i = m, sum = 0; i <= r; i++) {
      sum += nums[i];
      maxRightSum = Math.max(maxRightSum, sum);
    }

    return Math.max(
      maxLeftSum,
      maxRightSum,
      maxLeftSum + maxRightSum - nums[m]
    );
  }

  function recursive(l: number, r: number): number {
    if (l > r) return Number.MIN_SAFE_INTEGER;
    if (l == r) return nums[l];

    const m = ~~(r + (l - r) / 2);

    return Math.max(recursive(l, m), recursive(m + 1, r), maxCrossSum(l, m, r));
  }

  return recursive(0, nums.length - 1);
}

function kadaneSolution(nums: number[]) {
  let globalSum = nums[0];
  for (let i = 1, localSum = nums[0]; i < nums.length; i++) {
    localSum = Math.max(localSum, 0) + nums[i];
    globalSum = Math.max(globalSum, localSum);
  }
  return globalSum;
}

function maxSubArray(nums: number[]): number {
    //   return divideAndConquerSolution(nums);
  return kadaneSolution(nums);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
