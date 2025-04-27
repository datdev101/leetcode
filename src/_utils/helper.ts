export function checkTestcases<Inputs extends unknown[], Expected>(
  testcases: {
    input: Inputs;
    expected: Expected;
  }[],
  testFunction: (...args: Inputs) => Expected,
  comparator: (a: Expected, b: Expected) => boolean = (a, b) => a === b
) {
  for (let i = 0; i < testcases.length; i++) {
    const testcase = testcases[i];
    const actual = testFunction(...testcase.input);
    const result = comparator(testcase.expected, actual);
    if (!result) {
      throw new Error(`Test ${i + 1} failed. Input: ${JSON.stringify(testcase.input)}, Expected: ${JSON.stringify(testcase.expected)}, Got: ${JSON.stringify(actual)}`);
    }
  }
  console.log("All tests passed");
}
