/**
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. 
  Notice that the solution set must not contain duplicate triplets.
 
 */


function threeSum(nums) {
  let result = [];
  let sum = 0;
  nums.sort((a,b) => a-b);
  for (let i = 0; i < nums.length; i++) {               //[-1,0,1,2,-1,-4]
    if(i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while(left < right ) {
     
      sum = nums[i] + nums[left] + nums[right];
     
      if(sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while(left < right && nums[left] === nums[left+1]) {
          left++;
        }
        while(left < right && nums[right] === nums[right-1]) {
          right--;
        }
        left++;
        right--;
      } else if(sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}


console.log(threeSum([-1,0,1,2,-1,-4]))