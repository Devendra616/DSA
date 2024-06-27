// Breadth First Search (DFS)
const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

// iterative is common way
function bfsIterative(graph, start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    graph[node].forEach((neighbour) => {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        console.log(`visited: ${neighbour}`);
        queue.push(neighbour);
      }
    });
  }
}

// recursive
function bfsRecursive(graph, start, queue = [start], visited = new Set()) {
  if (queue.length == 0) {
    return;
  }

  const node = queue.shift();
  for (let neighbour of graph[node]) {
    if (!visited.has(neighbour)) {
      visited.add(neighbour);
      console.log(`visited: ${neighbour}`);
      queue.push(neighbour);
    }
  }
  bfsRecursive(graph, start, queue, visited);
}

console.log("Iterative:");
console.log(bfsIterative(graph, "a"));
console.log("Recursive:");
console.log(bfsIterative(graph, "a"));
