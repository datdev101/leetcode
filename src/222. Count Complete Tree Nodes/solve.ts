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

function countNodes(root: TreeNode | null): number {
  if (root == null) return 0;

  // check if tree is perfect tree (leftDepth == rightDepth)
  let leftDepth = 0;
  let rightDepth = 0;

  for (let pLeft = root.left; pLeft !== null; pLeft = pLeft.left) {
    leftDepth++;
  }
  for (let pRight = root.right; pRight !== null; pRight = pRight.right) {
    rightDepth++;
  }

  if (leftDepth == rightDepth) return (2 << leftDepth) - 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, new TreeNode(6));

console.log(countNodes(root));
