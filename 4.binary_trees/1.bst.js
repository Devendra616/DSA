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

  // delete a node with key
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  /*
   * Search for the node where the key is
   * Find no of children
   * If two children - use inorder successor (smallest from right subtree)
   *                 - use inorder predecessor( largest from left subtree)
   * Replace the node.key from prev step to node of found key
   * Delete operation in node.key of the child
   */
  deleteNode(node, key) {
    if (node === null) {
      // Tree is empty
      return;
    }

    if (key < node.key) {
      // key is smaller than parent node key
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      // key is greater than parent node key move to right subtree
      node.right = this.deleteNode(node.right, key);
    } else {
      // key is found at node

      if (node.left === null && node.right === null) {
        // node has no child (leaf node), delete the node
        return null;
      } else if (node.left === null) {
        // node has only right child
        return node.right;
      } else if (node.right === null) {
        // node has only left child
        return node.right;
      } else {
        // node has both children
        // finds minimum node in right subtree
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  deleteNode2(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode2(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode2(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMaxNode(node.left);
        node.key = tempNode.key;
        node.left = this.deleteNode2(node.left, tempNode.key);
      }
    }
    return node;
  }

  findMaxNode(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  // in-order traversal
  inOrderTraversal() {
    let result = [];
    this.inOrder(this.root, result);
    return result;
  }
  inOrder(node, result) {
    if (node != null) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }

  // pre-order traversal
  preOrderTraversal() {
    let result = [];
    this.preOrder(this.root, result);
    return result;
  }
  preOrder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  // post-order traversal
  postOrderTraversal() {
    let result = [];
    this.postOrder(this.root, result);
    return result;
  }
  postOrder(node, result) {
    if (node !== null) {
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
      result.push(node.key);
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(9);
bst.insertNode(bst.root, new BSTNode(6));
bst.insertNode(bst.root, new BSTNode(7));
bst.insertNode(bst.root, new BSTNode(14));
bst.insertNode(bst.root, new BSTNode(13));
console.log(bst.inOrderTraversal());
console.log(bst.preOrderTraversal());
console.log(bst.postOrderTraversal());
bst.delete(8);
console.log(bst.inOrderTraversal());
