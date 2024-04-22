function search(nums, target) { 
  console.log(nums)
 let low = 0; 
  console.log('low', low);
 let high = nums.length - 1; //
 console.log('high', high);
 while(low <= high) {
    let midPoint = Math.floor((low + high) / 2); 
     console.log('midPoint', midPoint);
    if(target === nums[midPoint]) return midPoint; 

    if(nums[low] <= nums[midPoint]) { // 3 < 5
       console.log('if');
        if( target <= nums[midPoint] && target >= nums[low]) {
            high = midPoint - 1; 
        } else {
            low = midPoint + 1;
        }
    } else {
        if(nums[midPoint] <= target && target <= nums[high]) {
            low = midPoint + 1;
        } else {
            high = midPoint - 1;
        }
    }
 }
 return -1;
  }

console.log(search([3,5,1], target = 3));