## What is a Graph Data Structure?

A **graph** is a non-linear data structure composed of **vertices** (also known as nodes) and **edges** that connect these vertices. Here are the key components:

- **Vertices (Nodes)**: These are the fundamental units of the graph. Each vertex represents an entity or an element. Vertices can be labeled or unlabeled.
- **Edges**: Edges connect pairs of vertices. They represent relationships or links between entities. Edges can be directed (indicating a one-way connection) or undirected (representing a two-way connection).

## Types of Graphs:

1.  **Null Graph**: A graph with no edges.
2.  **Trivial Graph**: Consists of only a single vertex (the smallest possible graph).
3.  **Undirected Graph**: Edges have no direction; nodes are unordered pairs.
4.  **Directed Graph (Digraph)**: Edges have direction; nodes are ordered pairs.
5.  **Connected Graph**: You can visit any node from any other node in the graph.
6.  **Disconnected Graph**: At least one node is not reachable from another node.
7.  **Regular Graph**: Every vertex has the same degree (number of edges incident to it).
8.  **Complete Graph**: Every node has an edge to every other node.
9.  **Cycle Graph**: The graph forms a cycle (each vertex has a degree of 2).

## Depth First Search (DFS):

- **DFS** is an algorithm for traversing or searching tree or graph data structures.
- It starts at the root node (or any arbitrary node in the case of a graph) and explores as far as possible along each branch before backtracking.
- The key idea is to visit a node and then recursively visit its adjacent nodes.
- DFS explores as deep as possible before backtracking,
- It uses **stack**.
- To avoid processing a node more than once, we use a boolean `visited` array.

## Breadth First Search (BFS):

- **BFS** explores the graph level by level, visiting all neighbors of a node before moving on to their neighbors.
- It uses a **queue** to maintain the order of exploration.
- It explores in all direction (circular exploration)

## Key differences

In DFS:<br>
Fist we add the current node to visited if not already
then move to neighbouring nodes

In DFS:<br>
First we add the neighbouring nodes of current node to visited
then add the current node to visited

## Undirected Graph

    An **undirected graph** is a type of graph where the edges have no specified direction. In other words, each edge connects two nodes (vertices) without any inherent arrow or parent-child relationship.

1.  **Edges**:
    - Bidirectional: Edges in an undirected graph allow movement in both directions.
    - No Parent-Child Concept: Unlike directed graphs, there’s no concept of a “parent” or “child” vertex.
2.  **Loops**:
    - An undirected graph may contain **loops**, which are edges connecting a vertex to itself.
3.  **Degree of Vertices**:
    - The degree of each vertex (number of edges connected to it) remains the same as the total number of edges incident upon it.

## Problems

1.  [Depth First Search](./1.dfs.js) : Find depth first search traversal of graph.
2.  [Breadth First Search](./2.bfs.js) : Find breadth first search traversal of graph.
3.  [Has Direct Path between](./3.hasDirectPath.js.js) : Check if there is direct path between start and end nodes of a graph.
4.  [Create undirected graph](./4.undirectedGraph.js) : Edges of undirected graph is provided, create adjacency list of the graph and apply methods like hasPath, bfs, dfs etc.
