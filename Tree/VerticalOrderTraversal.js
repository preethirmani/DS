class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traversal(root) {
  if(root === null) return [];
  const result = [];
  const columnsMap = new Map();
  const queue = [{node : root, column : 0}];

  while(queue.length > 0) {
    const {node, column} = queue.shift();
    //console.log('node, column',node, column);
    if(!columnsMap.has(column)) {
      columnsMap.set(column, []);
    }

    columnsMap.get(column).push(node.val);
    if(node.left) {
      queue.push({node: node.left, column : column - 1});
    }

    if(node.right) {
      queue.push({node: node.right, column : column + 1});
    }
  }
  console.log('columnsMap',columnsMap)
  const sortedColumns = Array.from(columnsMap.keys()).sort((a,b) => a - b);
  console.log('sortedColumns',sortedColumns);

  for(const column of sortedColumns) {
    result.push(columnsMap.get(column));
  }


  return result;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(root);

console.log(traversal(root));