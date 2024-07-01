/* 
    https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, 
append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let pos = 0;

  while (pos < word1.length && pos < word2.length) {
    result += word1[pos];
    result += word2[pos];
    pos++;
  }

  if (pos < word1.length) {
    result += word1.slice(pos);
  }

  if (pos < word2.length) {
    result += word2.slice(pos);
  }

  return result;
};
