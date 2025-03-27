function majorityElement(nums: number[]): number {
  let majorNum = nums[0];
  let majorCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (majorCount == 0) {
      majorNum = nums[i];
      majorCount++;
    } else {
      if (majorNum == nums[i]) majorCount++;
      else majorCount--;
    }
  }

  majorCount == 0;
  for (let i = 0; i < nums.length; i++) {
    if (majorNum == nums[i]) majorCount++;
  }

  return majorCount > nums.length >> 1 ? majorNum : -1;
}

const nums = [3, 2, 3];
console.log(majorityElement(nums));
