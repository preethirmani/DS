class TreeNode {
  constructor(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
  }
 }

const node = new TreeNode(1, 2, 3);
console.log('node:', node);

var rightSideView = function(root) {
    if(!root) return [];
   let result = [];
   let queue = [root]; [1]

  while(queue.length > 0) {
    //to calculate the number of level. 
    const levelSize = queue.length; //2
    let rightmost = null;
    for(let i = 0; i < levelSize; i++) {
        const node = queue.shift(); //node = 2 ; queue = [2,3] ; result = [1]
        rightmost = node.val; //1
        if(node.left) queue.push(node.left); 
        if(node.right) queue.push(node.right);
    }
    result.push(rightmost)
  }
    return result;
   
};

