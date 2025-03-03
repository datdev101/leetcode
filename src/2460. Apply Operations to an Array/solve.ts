function applyOperations(nums: number[]): number[] {
  const result: number[] = [];
  let zeroCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
        result.push(2 * nums[i]);
        nums[i + 1] = 0;
      } else {
        result.push(nums[i]);
      }
    } else zeroCounter++;
  }

  while (zeroCounter-- > 0) {
    result.push(0);
  }

  return result;
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
