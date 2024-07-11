/* 
https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints 
of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.
Return the maximum amount of water a container can store.

Example:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 In this case, the max area of water (blue section) the container can contain is 49.
*/

var maxArea = function (height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const currentArea = currentHeight * currentWidth;

    maxWater = Math.max(currentArea, maxWater);

    // move the pointers
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(maxArea(number));
