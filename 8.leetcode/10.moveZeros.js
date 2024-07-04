/* 
    https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
    Given an integer array nums, move all 0's to the end of it
    while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
Input: nums = [0]
Output: [0]
*/

var moveZeroes = function (nums) {
  let nz = 0;
  //  shift non zero to left, nz counts the nonzero elements
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      nums[nz] = nums[index];
      nz++;
    }
  }
  // fill right side with 0
  while (nz < nums.length) {
    nums[nz++] = 0;
  }
};

let nums = [0, 1, 0, 3, 12, 5];

console.log(nums);
moveZeroes(nums);
console.log(nums);
