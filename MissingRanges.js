/**
 * You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

Return the shortest sorted list of ranges that exactly covers all the missing numbers. That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.

Example 1:

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]
Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
 */


function missingRanges(nums, lower, upper) {
  let result = [];
  if(nums.lenght === 0 ) {
    result.push([lower, upper]);
  }
  //array is not starting from lower
  if(nums[0] > lower) result.push(lower, nums[0]-1);
//0,1,3,50,75,99
  let i = 1;
  while(i < nums.length) {
    if(nums[i] - nums[i-1] > 1) {
      result.push([nums[i-1]+1, nums[i] - 1]);
    }
    i++
  }

  //if the last element is not the upper
;
 
   if(nums[nums.length - 1] < upper)  {

    let l = nums[nums.length - 1] + 1;
   result.push([l, upper]);
  }
  
  return result;

}

console.log(missingRanges([0,1,3,50,75], 0, 99));