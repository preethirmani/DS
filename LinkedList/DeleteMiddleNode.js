class LinkedList{
  constructor(val) {
    this.val = val;
    this.nect = null;
  }
}

const node1 = new LinkedList(1);
const node2 = new LinkedList(2);
const node3 = new LinkedList(3);
const node4 = new LinkedList(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(node1)

function deleteMiddleNode(head){
  let slow = head;
  let fast = head;
  while(fast.next.next != null) {
    console.log(fast.val)
    console.log(slow.val)
    fast = fast.next.next;
    slow = slow.next;
  }
  console.log('fast.val::', fast.val)
  console.log('slow.val::', slow.val)

}
deleteMiddleNode(node1);