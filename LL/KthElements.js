//Find kth element

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthElement(head, k) {
  let fast = head;
  let current = head;

  for(let i = 0; i <= k; i++){
    fast = fast.next;
  }

  if(fast === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while(fast) {
    fast = fast.next;
    current = current.next;
  }
  current.next = current.next.next;
}

let input = new LinkedList(0);
input.next = new LinkedList(1);
input.next.next = new LinkedList(2);
input.next.next.next = new LinkedList(3);
input.next.next.next.next = new LinkedList(4);
input.next.next.next.next.next = new LinkedList(5);
input.next.next.next.next.next.next = new LinkedList(6);
input.next.next.next.next.next.next.next = new LinkedList(7);
input.next.next.next.next.next.next.next.next= new LinkedList(8);
input.next.next.next.next.next.next.next.next.next= new LinkedList(9);

console.log(input);

console.log(kthElement(input,9));
