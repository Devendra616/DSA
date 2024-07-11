/* 
https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75
Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array 
if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/
var longestOnes = function (nums, k) {
  let zeroCount = 0;
  let max1 = 0;
  for (let left = 0, right = 0; right < nums.length; right++) {
    // console.log(`left:${left}, right:${right}, zerocount:${zeroCount}`);
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    max1 = Math.max(max1, right - left + 1);
    // console.log("🚀 ~ longestOnes ~ max1:", max1);
  }
  return max1;
};

let nums = [0, 0, 0, 0];

let k = 0;
console.log(longestOnes(nums, k));
