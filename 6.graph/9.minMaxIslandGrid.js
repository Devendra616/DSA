/*
Write function, minMaxIsland , that takes in a grid 
containing Ws and Ls. W represents water and L represents land. 
The function should return the size of the smallest island and largest island. 
An island is a vertically or horizontally connected region of land.
*/

function minMaxIsland(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let smallest = Infinity;
  let largest = 0;

  function exploreSize(r, c) {
    const pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return 0;
    }
    visited.add(pos);
    let size = 1;
    size += exploreSize(r - 1, c);
    size += exploreSize(r + 1, c);
    size += exploreSize(r, c - 1);
    size += exploreSize(r, c + 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        const size = exploreSize(r, c);
        largest = size > largest ? size : largest;
        smallest = size < smallest ? size : smallest;
      }
    }
  }
  return [smallest, largest];
}

const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

const [min, max] = minMaxIsland(grid);
console.log("Smallest islands connected by = " + min);
console.log("Largest islands connected by = " + max);
