function rotateArrayLeft(nums,k) {
  if(nums.length === 0 || nums.length === 1) return nums;
  let j = 1;
while(j <= k) {
  for (let i = 0; i < nums.length - 1; i++) {
    [nums[i], nums[i+1]] = [nums[i+1] , nums[i]];
  
  }
  j++;
}

  return nums;
}

//console.log(rotateArrayLeft([1,2,3,4,5], 2))
//One step left rotation
//[1,2,3,4,5] => [2,1,3,4,5] => [2,3,1,4,5] => [2,3,4,1,5] => [2,3,4,5,1]


// Taking O(n) space
function rotateArray(nums, k) {
  let temp = [];
  for(let i = 0; i < k; i++) {
    temp.push(nums[i]);
  }
  for(let i = k; i < nums.length; i++) {
    nums[i-k] = nums[i];  
  }
   let j = 0;
   while(j < temp.length) {
    nums[(nums.length + j) - k] = temp[j];
    j++;
   
   }
   return nums;
}
//k = 2 
//for i = 2 => nums[0] = nums[2] = [3,2,3,4,5]
// i = 3 => nums[1] = nums[3] => [3,4,3,4,5]
//i = 4 => nums[2] = nums[4] = [3,4,5,4,5]
console.log(rotateArray([1,2,3,4,5],2));
//[2,2,3,4,5] => [2,3,3,4,5] => [2,3,4,4,5]=> [2,3,4,5,5]

