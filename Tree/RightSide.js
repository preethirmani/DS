class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.right = new TreeNode(5);
node.right.right = new TreeNode(4);

//console.log('node', node);

const node1 = new TreeNode(1);
node1.right = new TreeNode(2);

function rightSide(node) {
  let result = [];
    let queue = [node];
  
   while(queue.length > 0) {
     let current = queue.shift();
     result.push(current.val);
     if(current.right) queue.push(current.right); 
   }
    return result;
}

console.log(rightSide(node1));