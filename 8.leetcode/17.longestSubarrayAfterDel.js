/* 
https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing 
only 1's in the resulting array. Return 0 if there is no such subarray.
Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
*/
var longestSubarray = function (nums) {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let max = 0;

  for (; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    if (zeroCount === 1) {
      max = Math.max(max, right - left);
      console.log("🚀 ~ longestSubarray ~ max:", max);
    }
  }
  return zeroCount === 0 ? nums.length - 1 : max;
};
let nums = [1, 1, 0, 1];
console.log(longestSubarray(nums));
