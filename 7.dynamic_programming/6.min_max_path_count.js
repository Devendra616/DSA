/* 
    In problem 5, the matrix/grid is now given some values of each cell.
    Find the minimum and maximum cost of reaching the destination.

    Given a matrix mat[][] of dimensions N * M, 
    the task is to find the path from the top-left cell (0, 0) to the 
    bottom-right cell (N – 1, M – 1) of the given matrix such that 
    sum of the elements in the path is maximum.
    Only move allowed is right and bottom
*/

function maxPathCost(grid, row = 0, col = 0, memo = {}) {
  if (row >= grid.length || col >= grid[0].length || grid[row][col] === "X") {
    // * X is wall or Snake or X
    return -Infinity;
  }

  const pos = row + "," + col;

  //  check if arrived at destination
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  //  return the cache result
  if (pos in memo) {
    return memo[pos];
  }
  const rightPaths = maxPathCost(grid, row, col + 1, memo);
  const downPaths = maxPathCost(grid, row + 1, col, memo);
  memo[pos] = Math.max(rightPaths, downPaths) + grid[row][col];

  return memo[pos];
}

function minPathCost(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;
  if (pos in memo) return memo[pos];

  if (row >= grid.length || col >= grid[0].length) {
    return Infinity;
  }
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  memo[pos] =
    grid[row][col] +
    Math.min(
      minPathCost(grid, row + 1, col, memo),
      minPathCost(grid, row, col + 1, memo)
    );

  return memo[pos];
}

let row = 2,
  col = 2;
let grid1 = [
  [3, 7],
  [9, 8],
];
console.log(grid1);

console.log("Max path cost => ", maxPathCost(grid1));

let grid2 = [
  [3, 7, 9, 2, 7],
  [9, 8, 3, 5, 5],
  [1, 7, 9, 8, 6],
  [3, 8, 6, 4, 9],
  [6, 3, 9, 7, 8],
];

console.log("Max path cost => ", maxPathCost(grid2));
console.log("Min path cost => ", minPathCost(grid2));
