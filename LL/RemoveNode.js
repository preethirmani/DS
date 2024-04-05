class ListNode{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const node = new ListNode(1);

node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

console.log(node.next.next);

function removeNode(head, n) {
  let slow = head;
  let fast = head;
  for(let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
}

console.log(removeNode(node, 2));