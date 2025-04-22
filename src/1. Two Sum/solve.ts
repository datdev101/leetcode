function twoSum(nums: number[], target: number): number[] {
  const mapper = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (mapper.has(target - nums[i])) return [i, mapper.get(target - nums[i])!];
    mapper.set(nums[i], i);
  }

  return [-1, -1];
}

function checkTestcases(
  dto: {
    input: {
      nums: number[];
      target: number;
    };
    expected: number[];
  }[]
) {
  for (let i = 0; i < dto.length; i++) {
    const testcase = dto[i];
    const result =
      JSON.stringify(testcase.expected.sort()) ==
      JSON.stringify(twoSum(testcase.input.nums, testcase.input.target).sort());
    if (!result) throw new Error(`Test ${i + 1} fail`);
  }
  console.log("All test passed");
}

checkTestcases([
  {
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    input: {
      nums: [3, 2, 4],
      target: 6,
    },
    expected: [1, 2],
  },
  {
    input: {
      nums: [3, 3],
      target: 6,
    },
    expected: [0, 1],
  },
]);
