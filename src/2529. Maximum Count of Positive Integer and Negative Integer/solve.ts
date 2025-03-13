function maximumCount(nums: number[]): number {
  function countPositive(left: number, right: number) {
    if (left > right) return nums.length - left;

    const mid = right + ((left - right) >> 1);
    if (nums[mid] <= 0) {
      return countPositive(mid + 1, right);
    } else {
      return countPositive(left, mid - 1);
    }
  }

  function countNegative(left: number, right: number) {
    if (left > right) return left;

    const mid = right + ((left - right) >> 1);
    if (nums[mid] >= 0) {
      return countNegative(left, mid - 1);
    } else {
      return countNegative(mid + 1, right);
    }
  }

  const left = 0,
    right = nums.length - 1;

  return Math.max(countNegative(left, right), countPositive(left, right));
}

const nums = [-3, -2, -1, 0, 0, 1, 2];
console.log(maximumCount(nums));
