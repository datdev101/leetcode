function minimumIndex(nums: number[]): number {
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

  majorCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (majorNum == nums[i]) majorCount++;
  }

  if (majorCount <= nums.length >> 1) return -1;

  for (
    let i = 0, leftMajorCount = 0, rightMajorCount = majorCount;
    i < nums.length;
    i++
  ) {
    if (nums[i] == majorNum) {
      leftMajorCount++;
      rightMajorCount--;
      const leftLen = i + 1;
      const rightLen = nums.length - (i + 1);
      if (leftMajorCount > leftLen >> 1 && rightMajorCount > rightLen >> 1)
        return i;
    }
  }

  return -1;
}

const nums = [1, 2, 2, 2];
console.log(minimumIndex(nums));
