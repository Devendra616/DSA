/* 
https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75
Given a string s and an integer k, return the maximum number of vowel 
letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
s consists of lowercase English letters.
1 <= k <= s.length


Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
*/
var maxVowels = function (s, k) {
  const vowels = new Set([..."aeiou"]);
  let countVowels = 0;
  for (let i = 0; i < k; i++) {
    countVowels += vowels.has(s[i]);
  }

  let maxVowels = countVowels;

  for (let i = k; i < s.length; i++) {
    // countVowels = countVowels - vowels.has(s[i - k]) + vowels.has(s[i]);
    if (vowels.has(s[i - k])) countVowels--;
    if (vowels.has(s[i])) countVowels++;

    maxVowels = Math.max(maxVowels, countVowels);
  }
  return maxVowels;
};

let s = "abciiidef";
let k = 3;
console.log(maxVowels(s, k));
