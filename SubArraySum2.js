/**Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 */

function subArraySum(nums, k) {
  let map = new Map();
  let count = 0;
  let sum = 0;
  map.set(0,1)
  for(let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]; 
    if(nums[i] - k === 0  ) {
       
      count++;
    } else {
      if(map.has(k-nums[i])) {
       
        count++;
      
      }
      map.set(nums[i], i);

    }
  }
  return count;
}

console.log('Answer::',subArraySum([1,2,3], 3));
console.log(subArraySum([1,-1,0], 0));