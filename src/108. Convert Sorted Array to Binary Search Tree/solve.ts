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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function dfs(l: number, r: number) {
    if (l > r) return null;

    const m = r + ~~((l - r) / 2);
    const root = new TreeNode(nums[m]);
    root.left = dfs(l, m - 1);
    root.right = dfs(m + 1, r);
    return root;
  }

  return dfs(0, nums.length - 1);
}

const nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
