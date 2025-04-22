function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const mapper = new Map<string, number>();
  for (const char of s) {
    mapper.set(char, (mapper.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const value = mapper.get(char);
    if (value === undefined) return false;
    if (value == 1) {
      mapper.delete(char);
    } else {
      mapper.set(char, value - 1);
    }
  }

  return mapper.size == 0;
}

function checkTestcases(
  dto: {
    input: {
      s: string;
      t: string;
    };
    expected: boolean;
  }[]
) {
  for (let i = 0; i < dto.length; i++) {
    const testcase = dto[i];
    const result =
      testcase.expected === isAnagram(testcase.input.s, testcase.input.t);
    if (!result) throw new Error(`Test ${i + 1} fail`);
  }
  console.log("All test passed");
}

checkTestcases([
  {
    input: {
      s: "anagram",
      t: "nagaram",
    },
    expected: true,
  },
  {
    input: {
      s: "rat",
      t: "car",
    },
    expected: false,
  },
]);
