//preorder --- root-left-right
class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.right = new TreeNode(6);

function preorder(root){
  if(root === null) return;
  const stack = [root];
  while(stack.length > 0) {
    const current = stack.pop();
    console.log(current.val);
    if(current.right) {
      stack.push(current.right);
    }
    if(current.left) {
      stack.push(current.left);
    }
  }
}

//recursion
function recursivePreorder(root) {
  if(root === null) return;
  console.log(root.val);
  recursivePreorder(root.left);
  recursivePreorder(root.right);

}
console.log(root);
console.log(preorder(root));
console.log(recursivePreorder(root));
