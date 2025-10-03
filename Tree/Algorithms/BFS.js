class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const node1 = new TreeNode('A');
const node2 = new TreeNode('B');
const node3 = new TreeNode('C');
const node4 = new TreeNode('D');
const node5 = new TreeNode('E');
const node6 = new TreeNode('F');
const node7 = new TreeNode('G');
const node8 = new TreeNode('H');

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node4.left = node8;
console.log(node1);

function bfs(root) {
  let queue = [root];
  while(queue.length > 0) {
    let current = queue.shift();
    console.log(current.val);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return
}

bfs(node1);
console.log('***************RECURSION************')

function bfs_recursion(root) {
  
  let q = [root]
  function bfs(queue) {
   
    if(queue.length == 0) return
    let cur = queue.shift();
    console.log(cur.val);
    if(cur.left) bfs([cur.left]);
    if(cur.right) bfs([cur.right]);
  }
  bfs(q)
  return;
}

//bfs(A) cur = A. A
//bfs(B) cur = B B
bfs_recursion(node1);
