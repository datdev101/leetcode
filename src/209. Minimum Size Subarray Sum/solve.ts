function minSubArrayLen(target: number, nums: number[]): number {
  let result = nums.length + 1;

  for (let right = 0, sum = 0, left = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      result = Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return result > nums.length ? 0 : result;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
