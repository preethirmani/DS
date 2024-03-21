class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);


const n2 = new Node(200);


n1.next = n2;
console.log(n1);
console.log(n2);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert at first node
  insertFirstNode(data) {
    this.head = new Node(data, this.head);
  }

}

const ll = new LinkedList();
ll.insertFirstNode(200);



ll.insertFirstNode(100);
console.log(ll);
