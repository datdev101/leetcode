function hashStr(str: string) {
  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);
  const hashArr = Array(zCode - aCode + 1).fill(0);
  for (let i = 0; i < str.length; i++) {
    hashArr[str.charCodeAt(i) - aCode] += 1;
  }
  return hashArr.join(",");
}

function groupAnagrams(strs: string[]): string[][] {
  const groupMap = new Map<string, string[]>();

  for (const str of strs) {
    const hashKey = hashStr(str);
    groupMap.set(hashKey, [...(groupMap.get(hashKey) ?? []), str]);
  }

  return Array.from(groupMap.values());
}

function test() {
  function formatArr(strs: string[][]) {
    return JSON.stringify(strs.flat().sort());
  }

  function checkTestcases(
    dto: {
      input: string[];
      expected: string[][];
    }[]
  ) {
    for (let i = 0; i < dto.length; i++) {
      const testcase = dto[i];
      const result =
        formatArr(testcase.expected) ===
        formatArr(groupAnagrams(testcase.input));
      if (!result) throw new Error(`Test ${i + 1} fail`);
    }

    console.log("All test passed");
  }

  checkTestcases([
    {
      input: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      input: [""],
      expected: [[""]],
    },
    {
      input: ["a"],
      expected: [["a"]],
    },
    {
      input: ["ddddddddddg", "dgggggggggg"],
      expected: [["dgggggggggg"], ["ddddddddddg"]],
    },
  ]);
}

test();
