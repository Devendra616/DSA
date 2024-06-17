class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// implementation
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insertion
  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      // tree is empty
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // insert newNode at its position in node subtree
  insertNode(node, newNode) {
    // node = root of subtree
    if (newNode.key <= node.key) {
      // move to left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // move to right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
