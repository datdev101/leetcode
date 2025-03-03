# [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150)

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

**Example 1:** 

<div class="example-block">
Input: s = "()"

Output: true

**Example 2:** 

<div class="example-block">
Input: s = "()[]{}"

Output: true

**Example 3:** 

<div class="example-block">
Input: s = "(]"

Output: false

**Example 4:** 

<div class="example-block">
Input: s = "([])"

Output: true

**Constraints:** 

- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.