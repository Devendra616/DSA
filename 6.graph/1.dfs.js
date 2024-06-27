// Depth First Search (DFS)
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function dfsIterative(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      console.log(`visited: ${node}`);
      graph[node].forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      });
    }
  }
}

// recursive
function dfsRecursive(graph, node, visited = new Set()) {
  if (!visited.has(node)) {
    visited.add(node);
    console.log(`visted: ${node}`);
    graph[node].forEach((neighbour) => {
      if (!visited.has(neighbour)) {
        dfsRecursive(graph, neighbour, visited);
      }
    });
  }
}
console.group("Iterative way");
console.log(dfsIterative(graph, "a"));
console.groupEnd();
console.group("Recursive way");
console.log(dfsRecursive(graph, "a"));
console.groupEnd();
