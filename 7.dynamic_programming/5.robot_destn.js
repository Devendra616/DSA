/* 
    https://leetcode.com/problems/unique-paths/

    There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
    The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
     The robot can only move either down or right at any point in time.
    There is a wall marked by X
Given the two integers m and n, return the number of possible unique paths that 
the robot can take to reach the bottom-right corner.
Input: m = 3, n = 7
Output: 28

*/

function uniquePaths(grid, row = 0, col = 0, memo = {}) {
  if (row >= grid.length || col >= grid[0].length || grid[row][col] === "X") {
    // * X is wall or Snake or X
    return 0;
  }

  const pos = row + "," + col;

  //  check if arrived at destination
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  //  return the cache result
  if (pos in memo) {
    return memo[pos];
  }
  const rightPaths = uniquePaths(grid, row, col + 1, memo);
  const downPaths = uniquePaths(grid, row + 1, col, memo);
  memo[pos] = rightPaths + downPaths;

  return memo[pos];
}

let row = 3,
  col = 7;
let grid = [...Array(row)].map(() => Array(col).fill(0));
console.log(grid);

console.log("unique paths=> ", uniquePaths(grid));
