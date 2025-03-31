function removeDuplicates(nums: number[]): number {
  let slowPointer = 0;
  for (let fastPointer = 0; fastPointer < nums.length; fastPointer++) {
    if (nums[slowPointer] !== nums[fastPointer]) {
      nums[++slowPointer] = nums[fastPointer];
    }
  }

  return slowPointer + 1;
}

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
