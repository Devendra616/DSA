// BREADTH FIRST TRAVERSAL
// LEVEL FIRST TRAVERSAL
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// BFT is based on queue and is as optimized as queue enqueue operation is
const breadthFirstTraversal = (root) => {
  const values = [];
  const queue = [root];

  if (root === null) {
    // return message or empty
    return values;
  }

  while (queue.length > 0) {
    const node = queue.shift(); //point of optimization
    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return values;
};
