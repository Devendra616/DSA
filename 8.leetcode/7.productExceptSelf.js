/* https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75
    Given an integer array nums, return an array answer such that answer[i] 
    is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and 
without using the division operation.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0] 
*/
var productExceptSelf = function (nums) {
  const length = nums.length;
  const left = new Array(length).fill(1);
  const right = new Array(length).fill(1);
  const answer = new Array(length);
  // left side array
  for (let i = 1; i < length; i++) {
    console.log(
      `Left side: ${i}=>${left[i - 1]} x ${nums[i - 1]} = ${
        left[i - 1] * nums[i - 1]
      }`
    );
    left[i] = left[i - 1] * nums[i - 1];
  }
  console.log(`left side array: ${left}`);
  // right side array
  for (let i = length - 2; i >= 0; i--) {
    console.log(
      `Right side: ${i}=>${right[i + 1]} x ${nums[i + 1]} = ${
        right[i + 1] * nums[i + 1]
      }`
    );
    right[i] = right[i + 1] * nums[i + 1];
  }
  console.log(`right side array: ${right}`);

  // result
  for (let i = 0; i < length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
};

nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
