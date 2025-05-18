# [91. Decode Ways](https://leetcode.com/problems/decode-ways/description/)

You have intercepted a secret message encoded as a string of numbers. The message is **decoded**  via the following mapping:

<code>"1" -> 'A'<br>
"2" -> 'B'<br>
...<br>
"25" -> 'Y'<br>
"26" -> 'Z'</code>

However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes (<code>"2"</code> and <code>"5"</code> vs <code>"25"</code>).

For example, <code>"11106"</code> can be decoded into:

- <code>"AAJF"</code> with the grouping <code>(1, 1, 10, 6)</code>
- <code>"KJF"</code> with the grouping <code>(11, 10, 6)</code>
- The grouping <code>(1, 11, 06)</code> is invalid because <code>"06"</code> is not a valid code (only <code>"6"</code> is valid).

Note: there may be strings that are impossible to decode.<br>
<br>
Given a string s containing only digits, return the **number of ways**  to **decode**  it. If the entire string cannot be decoded in any valid way, return <code>0</code>.

The test cases are generated so that the answer fits in a **32-bit**  integer.

**Example 1:** 

<div class="example-block">
Input: s = "12"

Output: 2

Explanation:

"12" could be decoded as "AB" (1 2) or "L" (12).

**Example 2:** 

<div class="example-block">
Input: s = "226"

Output: 3

Explanation:

"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

**Example 3:** 

<div class="example-block">
Input: s = "06"

Output: 0

Explanation:

"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

**Constraints:** 

- <code>1 <= s.length <= 100</code>
- <code>s</code> contains only digits and may contain leading zero(s).