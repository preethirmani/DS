class TreeNode {
    constructor(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
    }
  }

  
const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
 
const node1 = new TreeNode(4);
  node1.left = new TreeNode(9);
  node1.right = new TreeNode(0);
  node1.left.left= new TreeNode(5);
  node1.left.right= new TreeNode(1);

  

  function sumRoot(node) {
   if(node === null) return 0;
   let totalSum = 0;

      function dfs(node, currentSum) {
        if(node === null) return ;
   
        currentSum = currentSum * 10 + node.val;

         if(!node.left && !node.right) {
          totalSum = totalSum + currentSum;
          return ;
        }
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
      }
     dfs(node, 0);
     return totalSum;
  }
 

  console.log('list',sumRoot(node));