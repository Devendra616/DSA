// find size of biggest Island

function biggestIsland(graph) {
  let visited = new Set();
  let largest = 0;

  // returns size of the dfs graph
  function dfs(node) {
    if (visited.has(node)) {
      return 0;
    }

    let size = 1;
    visited.add(node);
    for (const neighbour of graph[node]) {
      size += dfs(neighbour);
    }

    return size;
  }

  for (node in graph) {
    if (!visited.has(node)) {
      const componentSize = dfs(node);
      largest = componentSize > largest ? componentSize : largest;
    }
  }
  return largest;
}

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
  g: [],
};

console.log(biggestIsland(graph));
