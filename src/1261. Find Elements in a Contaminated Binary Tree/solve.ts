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

class FindElements {
  private cacheValues: Set<number>;

  constructor(root: TreeNode | null) {
    this.cacheValues = new Set();
    if (root != null) {
      this.setCacheValues(root, 0);
    }
  }

  private setCacheValues(node: TreeNode, currentValue: number) {
    this.cacheValues.add(currentValue);
    if (node.left) this.setCacheValues(node.left, 2 * currentValue + 1);
    if (node.right) this.setCacheValues(node.right, 2 * currentValue + 2);
  }

  find(target: number): boolean {
    return this.cacheValues.has(target);
  }
}

// const tree = new TreeNode(-1);
// tree.right = new TreeNode(-1);
// tree.left = new TreeNode(-1);
// tree.left.left = new TreeNode(-1);
// tree.left.right = new TreeNode(-1);

// const finder = new FindElements(tree);
// console.log(finder.find(5));
