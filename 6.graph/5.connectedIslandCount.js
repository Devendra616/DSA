/* 
    Given a graph, count the connected islands ie count no of connected graphs
    A graph may have disjoint graphs all those graphs needs to be counted
*/

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
  g: [],
};

function connectedIsland(graph) {
  const visited = new Set();
  let countIsland = 0;

  function dfs(node) {
    if (visited.has(node)) {
      return;
    }
    visited.add(node);
    for (const neighbour of graph[node]) {
      dfs(neighbour);
    }
  }

  //  for..in loop over keys of array
  for (node in graph) {
    if (!visited.has(node)) {
      // node is not already considered in connected island
      dfs(node);
      countIsland++;
    }
  }
  return countIsland;
}

console.log(connectedIsland(graph));
