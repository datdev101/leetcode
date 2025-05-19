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

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];
  const queue: TreeNode[] = [];

  if (root) queue.push(root);

  while (queue.length) {
    result.push(queue[queue.length - 1].val);
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

checkTestcases(
  [
    {
      input: [
        new TreeNode(
          1,
          new TreeNode(2, null, new TreeNode(5)),
          new TreeNode(3, null, new TreeNode(4))
        ),
      ],
      expected: [1, 3, 4],
    },
    {
      input: [
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(4, new TreeNode(5))),
          new TreeNode(3)
        ),
      ],
      expected: [1, 3, 4, 5],
    },
    {
      input: [new TreeNode(1, null, new TreeNode(3))],
      expected: [1, 3],
    },
    {
      input: [null],
      expected: [],
    },
  ],
  rightSideView,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
