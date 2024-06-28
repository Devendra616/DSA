/*
    Find shortest path between two nodes
    For shortest path we choose BFS because it goes circular fashion, so finding nodes may not take much time if not at edges
    DFS may enter enter snake tail problem
*/

function shortestPath(edges, start, end) {
  const graph = createGraph(edges);
  console.log("🚀 ~ shortestPath ~ graph:", graph);
  // check set discussion for why [start] not just start
  const visited = new Set([start]);
  // start node has distance of 0, add to visited
  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === end) {
      return distance;
    }
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return "No Path found";
}

// creates adjacency list from the edges provided
function createGraph(edges) {
  const graph = {};
  for (const edge of edges) {
    const [u, v] = edge;
    if (!(u in graph)) graph[u] = [];

    if (!(v in graph)) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}

const edges1 = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
];

const edges2 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.log(shortestPath(edges1, "a", "c"));
console.log(shortestPath(edges2, "c", "t"));
