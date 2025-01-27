class Tree{
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

let A = new Tree('A');
let B = new Tree('B');
A.left = B;
A.right = new Tree('C');
A.left.left = new Tree('D');
A.left.right = new Tree('E');
A.left.left.left = new Tree('G');
A.right.right = new Tree('F');
A.right.right.left = new Tree('H');


let dfs = (root) => {
  if(root === null) return;
  console.log(root.value);
  dfs(root.left);
  dfs(root.right);
}


dfs(A);