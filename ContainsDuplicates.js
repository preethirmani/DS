/** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false 

Constraints:

1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9

 */

function containsDuplicate(nums) {
  if(nums.length === 1) return false;
  for(let i = 0; i < nums.length - 1; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] === nums[j]) 
        return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,3]));


//Using hashmap

function containsDuplicate2(nums) {
  let numsMap = new Map();
  numsMap.set(nums[0],0);
  
  for(let i = 1; i < nums.length ; i++) {
    if(numsMap.has(nums[i])){
      return true;
    } else {
      numsMap.set(nums[i],i)  
    }
     
  }
   return false;
}

console.log(containsDuplicate2([1,2,3,1]));
console.log(containsDuplicate2([1,2,3,4]));
console.log(containsDuplicate2([1,2,3,3]));