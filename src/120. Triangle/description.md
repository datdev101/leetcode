# [120. Triangle](https://leetcode.com/problems/triangle/description/)

Given a <code>triangle</code> array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index <code>i</code> on the current row, you may move to either index <code>i</code> or index <code>i + 1</code> on the next row.

**Example 1:** 

```
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
```

**Example 2:** 

```
Input: triangle = [[-10]]
Output: -10
```

**Constraints:** 

- <code>1 <= triangle.length <= 200</code>
- <code>triangle[0].length == 1</code>
- <code>triangle[i].length == triangle[i - 1].length + 1</code>
- <code>-10^4 <= triangle[i][j] <= 10^4</code>

**Follow up:**  Could youdo this using only <code>O(n)</code> extra space, where <code>n</code> is the total number of rows in the triangle?