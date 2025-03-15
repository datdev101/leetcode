function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = right + ((left - right) >> 1);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

const nums = [1, 3, 5, 6],
  target = 7;
console.log(searchInsert(nums, target));
