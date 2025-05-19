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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  const queue: TreeNode[] = [];

  if (root) queue.push(root);

  while (queue.length) {
    const values = [];
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift()!;
      values.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(values);
  }

  return result;
}

checkTestcases(
  [
    {
      input: [
        new TreeNode(
          3,
          new TreeNode(9),
          new TreeNode(20, new TreeNode(15), new TreeNode(7))
        ),
      ],
      expected: [[3], [9, 20], [15, 7]],
    },
    {
      input: [new TreeNode(1)],
      expected: [[1]],
    },
    {
      input: [null],
      expected: [],
    },
  ],
  levelOrder,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
