import { checkTestcases } from "../_utils/helper";

// for local test we will return input array
function sortColors(nums: number[]): number[] {
  let p0 = 0,
    p1 = 0,
    p2 = nums.length - 1;

  while (p1 <= p2) {
    if (nums[p1] == 0) {
      [nums[p0++], nums[p1++]] = [nums[p1], nums[p0]];
    } else if (nums[p1] == 1) {
      p1++;
    } else {
      [nums[p2--], nums[p1]] = [nums[p1], nums[p2]];
    }
  }

  return nums;
}

checkTestcases(
  [
    {
      input: [[2, 0, 2, 1, 1, 0]],
      expected: [0, 0, 1, 1, 2, 2],
    },
    {
      input: [[2, 0, 1]],
      expected: [0, 1, 2],
    },
  ],
  sortColors,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
