/* 
https://stackblitz.com/edit/vitejs-vite-szs8bw?file=DSA%2Fleetcode%2F23_row_col_pair.js&view=editor

You are given a string s, which contains stars *.
In one operation, you can:
Choose a star in s.
Remove the closest non-star character to its left, 
as well as remove the star itself.
Return the string after all stars have been removed.

Example 1:
Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".
*/

var removeStars = function (s) {
  let stack = [];
  for (const char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
