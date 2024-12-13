class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}const node = new TreeNode('A');
console.log('node.val', node.val);
node.left = new TreeNode('B');
node.left.left = new TreeNode('D');
node.left.right = new TreeNode('E');

node.right = new TreeNode('C');
node.right.left = new TreeNode('F');
node.right.right = new TreeNode('G');

function dfs(node) {
  if(node === null) return [];
  console.log('node', node.val);
  let stack = [node];
  while(stack.length > 0) {
    let current = stack.pop();
    console.log(current.val);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
}

dfs(node);