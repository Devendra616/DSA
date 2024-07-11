/* 
https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) 
such that row ri and column cj are equal.

A row and column pair is considered equal if they contain 
the same elements in the same order (i.e., an equal array).

Example:
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
*/

var equalPairs = function (grid) {
  const len = grid.length;
  const rowMap = new Map();

  for (let i = 0; i < len; i++) {
    const rowStr = grid[i].join(",");
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }
  let count = 0;
  for (let i = 0; i < len; i++) {
    let colArr = [];
    for (let j = 0; j < len; j++) {
      colArr.push(grid[j][i]);
    }
    const colStr = colArr.join(",");
    if (rowMap.has(colStr)) {
      count += rowMap.get(colStr);
    }
  }
  return count;
};
