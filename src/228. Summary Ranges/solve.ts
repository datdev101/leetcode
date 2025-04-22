function summaryRanges(nums: number[]): string[] {
  if (nums.length == 0) return [];

  const result: string[] = [];
  for (let slow = 0, fast = 0; fast <= nums.length; fast++) {
    if (fast == nums.length || nums[fast] - nums[slow] !== fast - slow) {
      const strBuilder = [`${nums[slow]}`];
      if (fast - 1 !== slow) {
        strBuilder.push(`->${nums[fast - 1]}`);
      }
      result.push(strBuilder.join(""));
      slow = fast;
    }
  }
  return result;
}

function checkTestcases(
  dto: {
    input: number[];
    expected: string[];
  }[]
) {
  for (let i = 0; i < dto.length; i++) {
    const testcase = dto[i];
    const result =
      JSON.stringify(testcase.expected) ===
      JSON.stringify(summaryRanges(testcase.input));
    if (!result) throw new Error(`Test ${i + 1} fail`);
  }
  console.log("All test passed");
}

checkTestcases([
  {
    input: [0, 1, 2, 4, 5, 7],
    expected: ["0->2", "4->5", "7"],
  },
  {
    input: [0, 2, 3, 4, 6, 8, 9],
    expected: ["0", "2->4", "6", "8->9"],
  },
]);
