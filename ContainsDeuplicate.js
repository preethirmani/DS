//LeetCode 217 Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let map = {};
   for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]]){
        return true;
    } else {
        map[nums[i]] = 1;
    }
   }
   return false;
};

let nums = [1,2,3,1];
containsDuplicate(nums);
console.log(containsDuplicate(nums))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))