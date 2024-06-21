/*Problem Statement:
Given a binary tree, return the sum of all the nodes' values.
Example:
Input: 
     1
    / \
   2   3

Output: 6
Explanation: The sum of the nodes in the tree is 1+2+3=6.
*/

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  //   finding sum of nodes in tree using BFS
  sumWithBFS(root) {
    if (root === null) {
      return;
    }

    let sum = 0;
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      sum += node.key;

      if (node.left !== null) {
        queue.push(node.left);
      } else if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return sum;
  }

  //   finding sum of nodes of tree using DFS
  sumWithDFS(root) {
    if (root === null) {
      return 0;
    }

    return root.key + this.sumWithDFS(root.left) + this.sumWithDFS(root.right);
  }
}
