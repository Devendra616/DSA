/* https://leetcode.com/problems/house-robber/description/
    You are a professional robber planning to rob houses along a street. 
    Each house has a certain amount of money stashed, the only constraint stopping you 
    from robbing each of them is that adjacent houses have security systems connected 
    and it will automatically contact the police if two adjacent houses were broken into 
    on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
Example:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

function houseRobber(nums, i = 0, memo = {}) {
  // accept or reject first element each time

  if (i in memo) return memo[i];

  if (i >= nums.length) return 0;

  let skip = houseRobber(nums, i + 1, memo);
  let accept = nums[i] + houseRobber(nums, i + 2, memo);
  memo[i] = Math.max(skip, accept);

  return memo[i];
}

nums = [2, 7, 9, 3, 1];
console.log(houseRobber(nums));
