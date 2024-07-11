/*
https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the 
original string by deleting some (can be none) of the characters without 
disturbing the relative positions of the remaining characters.
 (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* var isSubsequence = function (s, t) {

  let i = 0;
  let lastPos = -1;

  while (i < s.length) {
    let j = lastPos !== -1 ? lastPos + 1 : 0;
    let found = false;
    while (j < t.length) {
      if (s[i] === t[j]) {
        found = true;
        pos = j;
        if (pos < lastPos) {
          return false;
        }
        lastPos = pos;
        break;
      }
      j++;
    }
    if (!found) return false;
    i++;
    if (found && pos < lastPos) return false;
  }

  return true;
};
 */

var isSubsequence = function (s, t) {
  let sIndex = 0;
  if (s.length === 0) return true;

  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] === t[i]) sIndex++;

    if (sIndex === s.length) return true;
  }
  return false;
};

s = "b";
t = "c";
console.log(isSubsequence(s, t));
