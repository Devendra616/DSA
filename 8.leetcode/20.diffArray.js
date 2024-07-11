/* 
https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

Given two 0-indexed integer arrays nums1 and nums2, 
return a list answer of size 2 where:
answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
 */
var findDifference = function (nums1, nums2) {
  let answer1 = [];
  let answer2 = [];

  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  for (s1 of set1) {
    if (!set2.has(s1)) {
      answer1.push(s1);
    }
  }

  for (s2 of set2) {
    if (!set1.has(s2)) {
      answer2.push(s2);
    }
  }

  return [answer1, answer2];
};
/* 
const findDifference = function (num1, num2) {
  let set1 = new Set(num1);
  let set2 = new Set(num2);

  // delete from both sets if found
  for (s1 of set1) {
    if (set2.has(s1)) {
      set1.delete(s1);
      set2.delete(s1);
    }
  }

  return [[...set1], [...set2]];
};
 */
