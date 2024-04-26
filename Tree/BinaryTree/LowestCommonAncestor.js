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
node.right = new TreeNode(1);
node.right.left = new TreeNode(0);
node.right.right = new TreeNode(8);




function lowestCommonAncestor(root, p, q) {
  
  function dfs(node) {
   
        if(node === null)  {
          console.log('Node is null');
          return null;
        }
        
        if(node.val === p || node.val === q) {
          console.log('Node is :', node.val);
          return node.val;
        }
      
        const left = dfs(node.left);
        const right = dfs(node.right);

        if(left && right) return node.val;
        if(!left) return right;
        if(!right) return left;
    }

  return dfs(root);
}

console.log(lowestCommonAncestor(node, 5, 1));