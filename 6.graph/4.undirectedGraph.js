/* 
    Undirected Graph -> Directed Graph
    Directed Graph has Adjacency List so create an Adjacency list

    const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  b: [a],
  a: [b]
}
  
loop => check if key DOES NOT exist, then add key => push both nodes
*/

// creates adjacency list from the edges provided
function createGraph(edges) {
  const graph = {};
  for (edge of edges) {
    const [u, v] = edges;
    if (!(u in graph)) graph[u] = [];
    if (!(v in graph)) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}

// is path exist
// we can use any method of directed graph now

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
function isPath(edges, start, dest) {
  const graph = createGraph(edges);
  return hasPath(graph, start, dest);
}
