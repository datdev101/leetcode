function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const mapper = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (mapper.has(nums[i]) && i - mapper.get(nums[i])! <= k) return true;
    mapper.set(nums[i], i);
  }

  return false;
}

function checkTestcases(
  dto: {
    input: {
      nums: number[];
      k: number;
    };
    expected: boolean;
  }[]
) {
  for (let i = 0; i < dto.length; i++) {
    const testcase = dto[i];
    const result =
      testcase.expected ===
      containsNearbyDuplicate(testcase.input.nums, testcase.input.k);
    if (!result) throw new Error(`Test ${i + 1} fail`);
  }

  console.log("All test passed");
}

checkTestcases([
  {
    input: {
      nums: [1, 2, 3, 1],
      k: 3,
    },
    expected: true,
  },
  {
    input: {
      nums: [1, 0, 1, 1],
      k: 1,
    },
    expected: true,
  },
  {
    input: {
      nums: [1, 2, 3, 1, 2, 3],
      k: 2,
    },
    expected: false,
  },
]);
