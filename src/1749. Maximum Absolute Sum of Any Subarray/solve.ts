function maxAbsoluteSum(nums: number[]): number {
  let globalSum = nums[0];
  for (let i = 1, maxSum = nums[0], minSum = nums[0]; i < nums.length; i++) {
    maxSum = Math.max(maxSum, 0) + nums[i];
    minSum = Math.min(minSum, 0) + nums[i];
    globalSum = Math.max(Math.max(maxSum, -minSum), globalSum);
  }
  return globalSum < 0 ? -globalSum : globalSum;
}

console.log(maxAbsoluteSum([1, -3, 2, 3, -4]));
