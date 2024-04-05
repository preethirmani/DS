function moveZeros(nums) {
  let left;
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == 0) {
      left = i;
      console.log(i);
      break;
    }
  }

  
  if(left === undefined) return nums; 

  let right = left + 1;
  while( right < nums.length) {
   
    if(nums[right] != 0) {
      nums[left] = nums[right];
      nums[right] = 0;
      left++;
    }
    right++;
  }
  return nums;
}
console.log(moveZeros([2,1,5,3,12]));