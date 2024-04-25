class TreeNode{
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const node = new TreeNode(3);
node.left = new TreeNode(5);
node.left.left = new TreeNode(6);
node.left.right = new TreeNode(2);
node.left.right.left = new TreeNode(7);
node.left.right.right = new TreeNode(4);
node.rigth = new TreeNode(1);
node.right.left = new TreeNode(0);
node.rigth.right = new TreeNode(8);

console.log(node);







function lowestCommonAncestor(root, p, q) {
  

}