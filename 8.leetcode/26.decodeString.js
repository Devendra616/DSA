/* 
https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string
 inside the square brackets is being repeated exactly k times. 
 Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are 
no extra white spaces, square brackets are well-formed, etc.
Furthermore, you may assume that the original data does not contain 
any digits and that digits are only for those repeat numbers, k. 
For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.
Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"
*/
var decodeString = function (s) {
  if (s.length === 1) return s;
  let stack = [];
  let currentNum = 0;
  let currentString = "";

  function isNumber(num) {
    return num >= "0" && num <= "9";
  }

  for (const char of s) {
    if (isNumber(char)) {
      if (currentNum === 0) {
        currentNum = Number(char);
      } else {
        currentNum = Number(currentNum + char);
      }
    } else if (char === "[") {
      stack.push(currentNum);
      stack.push(currentString);
      currentNum = 0;
      currentString = "";
    } else if (char === "]") {
      let prevString = stack.pop();
      let prevNum = stack.pop();
      currentString = prevString + currentString.repeat(prevNum);
    } else {
      // char is alphabet
      currentString = currentString + char;
    }
  }

  return currentString;
};

s = "3[a2[c]]";
console.log(decodeString(s));
