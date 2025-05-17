import { checkTestcases } from "../_utils/helper";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];

  function dfs(node: TreeNode, path: number[]) {
    if (!node.left && !node.right) {
      result.push([...path].join("->"));
      return;
    }

    if (node.left) {
      path.push(node.left.val);
      dfs(node.left, path);
      path.pop();
    }
    
    if (node.right) {
      path.push(node.right.val);
      dfs(node.right, path);
      path.pop();
    }
  }

  if (root) dfs(root, [root.val]);

  return result;
}

checkTestcases(
  [
    {
      input: [
        new TreeNode(
          1,
          new TreeNode(2, null, new TreeNode(5)),
          new TreeNode(3)
        ),
      ],
      expected: ["1->2->5", "1->3"],
    },
    {
      input: [new TreeNode(1)],
      expected: ["1"],
    },
  ],
  binaryTreePaths,
  (a, b) => JSON.stringify(a.sort()) == JSON.stringify(b.sort())
);
