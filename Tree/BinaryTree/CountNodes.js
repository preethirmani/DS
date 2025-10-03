class Tree{
  constructor(val,left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);

  }
}

let root = new Tree(1);

root.left = new Tree(2);
root.left.left = new Tree(4);
root.left.right = new Tree(5);

root.right = new Tree(3);
root.right.left = new Tree(6);
console.log(root);








function countNode(root) {
  if(root == null) return 0;

  function numNodes(node) {
    if(node == null) return 0;
    return 1 + numNodes(node.left) + numNodes(node.right); 
  }
  return numNodes(root, 0);
}

let count = countNode(root);
console.log(count);