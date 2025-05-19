# [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/)

Given the <code>root</code> of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

**Example 1:** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" style="width: 277px; height: 302px;">

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```

**Example 2:** 

```
Input: root = [1]
Output: [[1]]
```

**Example 3:** 

```
Input: root = []
Output: []
```

**Constraints:** 

- The number of nodes in the tree is in the range <code>[0, 2000]</code>.
- <code>-100 <= Node.val <= 100</code>