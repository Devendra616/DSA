/* 
https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower 
and upper cases, more than once.
Example 1:
Input: s = "hello"
Output: "holle"
Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  let res = s.split("");
  let vowelsArr = "aeiouAEIOU".split("");

  function checkVowel(char) {
    return vowelsArr.includes(char);
  }

  while (left < right) {
    while (left < right && !vowelsArr.includes(res[left])) {
      left++;
    }
    while (left < right && !vowelsArr.includes(res[right])) {
      right--;
    }
    // swap if vowels
    if (left < right) {
      let temp = res[left];
      res[left] = res[right];
      res[right] = temp;

      left++;
      right--;
    }
  }

  return res.join("");
};
