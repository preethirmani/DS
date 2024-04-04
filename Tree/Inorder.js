//Inorder --- left-root-right  --- 425136

class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.right = new TreeNode(6);
console.log(root);


function inorder(root) {
 if(root === null) {
 
  return;
 }
 if(root.left) inorder(root.left);
 console.log(root.val);
 if(root.right) inorder(root.right);


}

function inorderLoop(root) {
  let stack = [];
  let current = root;
  while(current != null || stack.length > 0) {
    while(current != null) {
      stack.push(current);
      current = current.left;
    }
    current  = stack.pop();
    console.log(current.val);
    current = current.right;
  }
}

console.log(inorder(root));
console.log(inorderLoop(root));