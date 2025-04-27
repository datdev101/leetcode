import { checkTestcases } from "../_utils/helper";

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

checkTestcases(
  [
    {
      input: ["anagram", "nagaram"],
      expected: true,
    },
    {
      input: ["rat", "car"],
      expected: false,
    },
  ],
  isAnagram
);
