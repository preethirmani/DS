function fourSum(nums, target) {
  const result = []
  nums.sort((a,b) => a - b) // [-2, -1, 1, 0, 0, 2]
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while(left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if(sum === target) {
          result.push([nums[i] , nums[j] , nums[left], nums[right]]);
          while(left < right && nums[left] === nums[left+1]) {
            left++;
          }
          while(left < right && nums[right] === nums[right-1]) {
            right--;
          }
          left++;
          right--;
        } else if(sum < target) {
          left++;
        } else {
          right--;
        }
      }
      while(nums[j] === nums[j+1]) j++;
    }
    while(nums[i] === nums[i+1]) i++;
  }
 return result;

}


console.log(fourSum([1,0,-1,0,-2,2], 0))