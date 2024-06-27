/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), 
return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.
*/

function hasPathDFS(graph, start, dest) {
  const stack = [start];
  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
}

function hasPathBFS(graph, start, dest) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        queue.push(neighbour);
      }
    }
  }
  return false;
}

function hasPath(graph, start, dest, visited = new Set()) {
  if (start === dest) {
    return true;
  }

  if (visited.has(start)) {
    // cycle
    return false;
  }

  visited.add(start);
  for (const neighbour of graph[start]) {
    if (hasPath(graph, neighbour, dest, visited)) {
      return true;
    }
  }
  return false;
}

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

const start = "d";
const dest = "a";
console.log(`DFS: ${hasPathDFS(graph, start, dest)}`);
console.log(`BFS: ${hasPathBFS(graph, start, dest)}`);
console.log(`Recursive: ${hasPath(graph, start, dest)}`);
