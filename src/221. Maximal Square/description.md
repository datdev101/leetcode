# [221. Maximal Square](https://leetcode.com/problems/maximal-square/description/)

Given an <code>m x n</code> binary <code>matrix</code> filled with <code>0</code>'s and <code>1</code>'s, find the largest square containing only <code>1</code>'s and return its area.

**Example 1:** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg" style="width: 400px; height: 319px;">

```
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
```

**Example 2:** 
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg" style="width: 165px; height: 165px;">

```
Input: matrix = [["0","1"],["1","0"]]
Output: 1
```

**Example 3:** 

```
Input: matrix = [["0"]]
Output: 0
```

**Constraints:** 

- <code>m == matrix.length</code>
- <code>n == matrix[i].length</code>
- <code>1 <= m, n <= 300</code>
- <code>matrix[i][j]</code> is <code>'0'</code> or <code>'1'</code>.