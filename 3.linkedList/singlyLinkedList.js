class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// insert at Begining
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head);
  this.head = newNode;
};

// insert at End
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  // if list is empty
  if (!this.head) {
    this.head = newNode;
    return;
  }

  let tail = this.head;
  while (tail.next) {
    tail = tail.next;
  }

  tail.next = newNode;
};

// insert after a given node
LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("The given prev node cannot be null");
    return;
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// insert after Node data
LinkedList.prototype.insertAfterValue = function (value, data) {
  const newNode = new Node(data);

  // check if list is empty
  if (!this.head) {
    return "The list is empty";
  }

  let prevNode = this.head;
  while (prevNode && prevNode.data !== value) {
    prevNode = prevNode.next;
  }
  // prevNode is null, value not found till end
  if (!prevNode) {
    return `No Node with value ${value} is found`;
  }

  newNode.next = prevNode.next;
  prevNode.next = newNode;
};

// delete first Node
LinkedList.prototype.deleteFirst = function () {
  // if list is empty
  if (!this.head) {
    return;
  }

  this.head = this.head.next;
};

// delete last Node
LinkedList.prototype.deleteLast = function () {
  // if list is empty
  if (!this.head) {
    return;
  }

  // if list has only one node
  if (!this.head.next) {
    this.head = null;
    return;
  }

  // list has more than one node
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

// delete a key Node
LinkedList.prototype.deleteByValue = function (key) {
  // if list empty
  if (!this.head) {
    return "List is empty";
  }

  // if key found at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next) {
    // key found at next node
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }

  // key not found
  return `No node found with key ${key}`;
};

// search a key
LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next;
  }
  return false;
};

// traverse list
LinkedList.prototype.printList = function () {
  let listValues = [];
  let current = this.head;

  while (current) {
    listValues.push(current.data);
    current = current.next;
  }

  return listValues.length ? listValues.join(" -> ") : "";
};

// reverse list
LinkedList.prototype.reverse = function () {
  let currentNode = this.head;
  let nextNode = null;
  let prevNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  this.head = prevNode;
};

const ll = new LinkedList();
ll.insertAtBeginning(10);
ll.insertAtBeginning(20);
ll.insertAtBeginning(30);
console.log(ll.printList());
ll.insertAtEnd(40);
ll.insertAtEnd(50);
console.log(ll.printList());
ll.insertAfterValue(20, 60);
console.log(ll.printList());
ll.deleteByValue(20);
console.log(ll.printList());
ll.deleteByValue(90);
ll.deleteFirst();
console.log(ll.printList());
ll.deleteLast();
console.log(ll.printList());

console.log(ll.deleteByValue(600));
