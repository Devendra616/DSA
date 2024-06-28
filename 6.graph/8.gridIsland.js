/* 
Given an m x n 2D binary grid, where ‘1’ represents land and ‘0’ represents water, 
your task is to find the number of islands. An island is a group of connected '1’s (adjacent horizontally or vertically) surrounded by water.
 You can assume that all four edges of the grid are surrounded by water.
    Find no of islands from a grid
    Islands = 1
    Water = 0

    Input:
[
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input:
[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/
function islandCount(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let count = 0;

  function dfs(r, c) {
    const pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return;
    } else {
      visited.add(pos);
    }
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}

const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

const grid2 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

console.log("No.of Islands in grid are=" + islandCount(grid));
console.log("No.of Islands in grid2 are=" + islandCount(grid2));
