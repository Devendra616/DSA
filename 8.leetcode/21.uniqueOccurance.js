/* 
https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75
Given an array of integers arr, return true if the number of occurrences 
of each value in the array is unique or false otherwise.
Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. 
No two values have the same number of occurrences.
*/
var uniqueOccurrences = function (arr) {
  let occrSet = new Set();
  let countMap = new Map();

  // add numbers to map object
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const count of countMap.values()) {
    if (occrSet.has(count)) return false;

    occrSet.add(count);
  }
  return true;
};

arr = [1, 2];
console.log(uniqueOccurrences(arr));
