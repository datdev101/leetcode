# [3355. Zero Array Transformation I](https://leetcode.com/problems/zero-array-transformation-i/description/?envType=daily-question&envId=2025-05-20)

You are given an integer array <code>nums</code> of length <code>n</code> and a 2D array <code>queries</code>, where <code>queries[i] = [l<sub>i</sub>, r<sub>i</sub>]</code>.

For each <code>queries[i]</code>:

- Select a <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rp:" data-state="closed" class="">subset</button> of indices within the range <code>[l<sub>i</sub>, r<sub>i</sub>]</code> in <code>nums</code>.
- Decrement the values at the selected indices by 1.

A **Zero Array**  is an array where all elements are equal to 0.

Return <code>true</code> if it is possible to transform <code>nums</code> into a **Zero Array ** after processing all the queries sequentially, otherwise return <code>false</code>.

**Example 1:** 

<div class="example-block">
Input: nums = [1,0,1], queries = [[0,2]]

Output: true

Explanation:

- **For i = 0:** 

- Select the subset of indices as <code>[0, 2]</code> and decrement the values at these indices by 1.
- The array will become <code>[0, 0, 0]</code>, which is a Zero Array.

**Example 2:** 

<div class="example-block">
Input: nums = [4,3,2,1], queries = [[1,3],[0,2]]

Output: false

Explanation:

- **For i = 0:** 

- Select the subset of indices as <code>[1, 2, 3]</code> and decrement the values at these indices by 1.
- The array will become <code>[4, 2, 1, 0]</code>.

- **For i = 1:** 

- Select the subset of indices as <code>[0, 1, 2]</code> and decrement the values at these indices by 1.
- The array will become <code>[3, 1, 0, 0]</code>, which is not a Zero Array.

**Constraints:** 

- <code>1 <= nums.length <= 10^5</code>
- <code>0 <= nums[i] <= 10^5</code>
- <code>1 <= queries.length <= 10^5</code>
- <code>queries[i].length == 2</code>
- <code>0 <= l<sub>i</sub> <= r<sub>i</sub> < nums.length</code>