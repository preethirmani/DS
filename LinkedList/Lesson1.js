class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new Node(36);
const node2 = new Node(48);
const node3 = new Node(60);

node1.next = node2;
node2.next = node3;

console.log(node1);
let head = node1;

console.log(head);

//Insert at beginning

const newNode = new Node(24);

function insert_First(head, node){
  node.next = head;
  head = node;
  console.log(head);
  return head;
}

head = insert_First(head, newNode)
console.log('**** After Inserting First *******')
console.log(head);

//Insert at the end
console.log('************* Insert End ***************')
const newNode1 = new Node(72);

function insert_Last(head, node) {
  let current = head;
  
  while(current.next) {
    current = current.next;
  }
  current.next = node;
 
  return head;
}

head = insert_Last(head, newNode1);
console.log(head)

//TRAVERSE AND PRINT
console.log('********** Traverse and Print ***********')

function traverse(head) {
  let current = head;
  while(current) {
    console.log('current.val:', current.val);
    current = current.next;
  }

}
traverse(head);

console.log('**********COUNT NODES***********')
function countNodes(head) {
  let current = head;
  let size = 0;
  while(current) {
    size++;
    current = current.next;
  }
  console.log('SIZE::', size)
  return size;
}
countNodes(head)

console.log('***********SEARCH FOR A VALUE *************')

function search(head, num) {
  let current = head;
  while(current) {
    if(current.val == num) {
      console.log(`${num} found`)
      return 
    }
    current = current.next;
  }
  console.log('false')
  return false;
}

search(head, 48);
search(head, 24);
search(head, 12);
search(head, 72);
search(head, 84);

console.log('*********Minimum and Maximum Numbers');
function min_max(head) {
  let min_val = Infinity;
  let max_val = -Infinity;
  let current = head;
  while(current) {
    min_val = Math.min(current.val, min_val);
    max_val = Math.max(current.val, max_val);
    current = current.next;
  }
  console.log('Minimum Value in the given LL :', min_val);
  console.log('Maximum value in the given LL :', max_val);
  return;
}

min_max(head);

console.log('********** SUM OF ALL NODES IN LL *************')
function sumOfNodes(head) {
  let sum = 0;
  let current = head;
  while(current) {
    sum = sum + current.val;
    current = current.next;
  }
  return sum;
}
sum = sumOfNodes(head);
console.log('Sum of all the nodes::', sum);

console.log('*********** REVERSE PRINT ***********')
function reversePrint(head) {
  let stack = [];
  let current = head;
  while(current) {
    stack.push(current.val);
    current = current.next;
  }
  while(stack.length) {
    console.log(stack.pop());
  }
  return;
}

reversePrint(head);
console.log('********* RECURSION ***********')

function reversePrint1(head) {
  let temp = head;

  function recursive(current) {
    if(!current) {
      return
    }
   
     recursive(current.next)
      console.log(current.val);
  }
  recursive(temp);
  return
}
reversePrint1(head);

console.log('********Delete First Node*********');

function deleteFirst(head) {
  head = head.next;
  return head;
}
console.log(deleteFirst(head));


console.log('********* REMOVE LAST *********')
function removeLast(head) {
  if(head === null) return null;
  let current = head;
  while(current.next.next != null) {
    current = current.next;
  }
  //now my current is a node before the last node, how to delet the last node
  current.next = null;
  return head;
}
removeLast(head);


traverse(head);
