import { checkTestcases } from "../_utils/helper";

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  const window = new Map<string, number>();
  const expectedWindow = new Map<string, number>();
  let [start, end] = [-1, -1];
  let validCount = 0;

  for (let i = 0; i < t.length; i++) {
    expectedWindow.set(t[i], (expectedWindow.get(t[i]) ?? 0) + 1);
  }

  for (let right = 0, left = 0; right < s.length; right++) {
    window.set(s[right], (window.get(s[right]) ?? 0) + 1);
    if (
      expectedWindow.has(s[right]) &&
      window.get(s[right])! <= expectedWindow.get(s[right])!
    ) {
      validCount++;
    }

    while (left <= right && validCount == t.length) {
      if (start == -1 || end - start > right - left)
        [start, end] = [left, right];

      const count = window.get(s[left])!;

      if (
        expectedWindow.has(s[left]) &&
        count <= expectedWindow.get(s[left])!
      ) {
        validCount--;
      }

      if (count == 1) window.delete(s[left]);
      else window.set(s[left], count - 1);

      left++;
    }
  }

  return start == -1 ? "" : s.substring(start, end + 1);
}

checkTestcases(
  [
    {
      input: ["ADOBECODEBANC", "ABC"],
      expected: "BANC",
    },
    {
      input: ["a", "a"],
      expected: "a",
    },
    {
      input: ["a", "aa"],
      expected: "",
    },
  ],
  minWindow
);
