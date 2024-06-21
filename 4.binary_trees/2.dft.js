// DEPTH FIRST TRAVERSAL
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/* initally put root to stack
    * if stack is not empty
        pop last value from stack and put to values
        if left first traversal - if popped node has right child put to stack
                                   then put popped left child to stack
        if right first traversal - if popped node has left child put to stack
                                   then put popped right child to stack
*/
const depthFirtTravesal = (root) => {
  const values = [];
  const stack = [root];

  if (root === null) {
    // return message or empty
    return values;
  }

  while (stack.length > 0) {
    // remove the top node
    const node = stack.pop();
    // put top node value to array
    values.push(node.key);

    // if traverse left first, put right child then left child
    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values;
};

const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return; //empty array or string
  }
  // array of left nodes
  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);

  return [root.key, ...leftValues, ...rightValues];
};
