class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('G');
const G = new Node('H');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;
F.next = G;
G.next = null;


function traversal(head) {
  let current = head;
 
  let count = 0;
  while(current ) {
    
    console.log('current.val',current.val);
    console.log('current.next',current.next);

    count++;
    current = current.next;
    
  }
  console.log('count::', count);

}

//traversal(A);

function recursiveTraversal(node, count) {
  if(!node || node.next === null) return;
   console.log('Recurive Traversal',node.val);
   console.log('count', count++)
  
     recursiveTraversal(node.next, count);

 }

 console.log('Recureive Traversal::',recursiveTraversal(A,0));