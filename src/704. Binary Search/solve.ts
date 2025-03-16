function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = right - ((right - left) >> 1);
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

const nums = [-1, 0, 3, 5, 9, 12],
  target = 9;
console.log(search(nums, target));
