class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  // keep track of head and tail in DLL
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// insert at start of list
DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);

  // if not empty
  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;

  // optional: if tail is null
  if (!this.tail) {
    this.tail = newNode;
  }
};
// insert at end of list
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);

  // if not empty
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;

  // optional: if head is null
  if (!this.head) {
    this.head = newNode;
  }
};

// insert after a given Node
DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
  if (prevNode === null) {
    return "Invalid Previous Node";
  }

  const newNode = new Node(data, prevNode.next, prevNode);

  // if prevNode is not tail
  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  } else {
    // if tail node
    this.tail = newNode;
  }
  prevNode.next = newNode;
};

// insert after Node data
DoublyLinkedList.prototype.insertAfterValue = function (value, data) {
  // if value at start
  if (this.head.data === value) {
    return this.insertAtBeginning(data);
  } else if (this.tail.data === value) {
    // value is at end
    return this.insertAtEnd(data);
  } else {
    // value is in between
    const newNode = new Node(data);

    let current = this.head.next;
    while (current !== this.tail) {
      if (current.data === value) {
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    console.log(`No node exists with value ${value}`);
    return `No node exists with value ${value}`;
  }
};

// delete first Node
DoublyLinkedList.prototype.deleteFirstNode = function () {
  // list empty
  if (!this.head) {
    console.log("Nothing to delete");
    return;
  }

  // only one node in list
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return;
  }
  this.head = this.head.next;
  this.head.prev = null;
};

// delete the last Node
DoublyLinkedList.prototype.deleteLastNode = function () {
  // empty
  if (!this.tail) {
    console.log("Nothing to delete");
    return;
  }

  // only one node in list
  if (this.tail === this.head) {
    this.head = null;
    this.tail = null;
    return;
  }
  this.tail = this.tail.prev;
  this.tail.next = null;
};

// reverse the list
DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current !== null) {
    // swap the next and prev pointers of each current node
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // move to next current node
    // !move current to current’s previous node because after swapping, current’s prev stores the address of current’s next node.
    current = current.prev;
  }
  // Check if the list was non-empty
  if (temp !== null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};

// traverse the list
DoublyLinkedList.prototype.printList = function () {
  let listValues = [];
  let current = this.head;

  while (current !== null) {
    listValues.push(current.data);
    current = current.next;
  }

  console.log(listValues.length ? listValues.join(" -> ") : "");
  return listValues.length ? listValues.join(" -> ") : "";
};

const dll = new DoublyLinkedList();
dll.insertAtBeginning(10);
dll.insertAfterValue(10, 20);
dll.insertAfterValue(40, 30);
dll.printList();
dll.insertAtEnd(40);
dll.insertAtEnd(50);
dll.insertAtEnd(60);
dll.printList();
dll.reverse();
dll.printList();
