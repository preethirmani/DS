class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(3);

root.left = new TreeNode(2);
root.left.left = new TreeNode(1);

root.right = new TreeNode(5);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(6);

root.right.right.right = new TreeNode(7);

console.log(root);

console.log('********** TRAVERSAL ***********');

function traversal(root) {
  if(root == null) return null;
  console.log(root.val);
  traversal(root.left);
  traversal(root.right);
}

traversal(root);
console.log('********BFS********');
function bfs(root) {
  if(root == null) return null;
  const queue = [root];
  while(queue.length > 0) {
    const current = queue.shift();
    console.log(current.val);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return
}
bfs(root);

console.log('***********HEIGHT***************')
function height(root){
  if(root === null ) return 0;
  let left_height = 0;
  let right_height = 0;
  let stack = [root];
  while(stack.length > 0) {
    let cur = stack.pop();
    if(cur.left) {
      stack.push(cur.left);
      left_height++;
    }
  }


  stack = [root];
 

  while(stack.length > 0) {
    let cur = stack.pop();
    if(cur.right) {
      stack.push(cur.right);
      right_height++;
    }
  }
  let h = Math.max(left_height, right_height);
  console.log(h);
}
let lh = height(root);


console.log('********** HEIGHT IN RECURSION ************');
function recursiveHeight(root) {
  if(root == null) return 0;

  function recursive(node) {
    if(node == null) return 0;
    return 1 + Math.max(recursive(node.left), recursive(node.right));
  }

  let h = recursive(root);
  console.log(h-1);
}

recursiveHeight(root);

console.log('********** TO COUNT ALL THE NODES **************')

function countNodes(root){
  if(root===null) return 0;
  return 1+countNodes(root.left)+countNodes(root.right);
}
let numNodes = countNodes(root);
console.log('Num of Nodes::', numNodes);



