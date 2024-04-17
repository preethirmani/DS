/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.


 */

function sortColors(nums) {    //[1,2,0]  midPointer = 1; lowPointer = 0;  highPointer = 1
  let midPointer = 0; 
  let lowPointer = 0; 
  let highPointer = nums.length - 1;
  while(midPointer <= highPointer) { 
    if(nums[midPointer] === 0) {
      [nums[lowPointer], nums[midPointer]] = [nums[midPointer], nums[lowPointer]];
      midPointer++;
      lowPointer++;
    } else if(nums[midPointer] === 1) {
      midPointer++;
    } else {
      //midpointer is at 2
      [nums[midPointer], nums[highPointer]] = [nums[highPointer], nums[midPointer]];
      
      highPointer--;
    }
  }

  return nums;
}

//console.log(sortColors([2,0,2,1,1,0]))
//console.log(sortColors([2,0,1]));
console.log(sortColors([1,2,0]));