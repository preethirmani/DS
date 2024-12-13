var sortColors = function(nums) {
 let lowPointer = 0;
 let midPointer = 0;
 let highPointer = nums.length - 1;
    while(midPointer <= highPointer) { 
      console.log('midPointer',midPointer);
       console.log('highPointer',highPointer);
        if(nums[midPointer] === 0) {
            [nums[lowPointer], nums[midPointer]] = [nums[midPointer], nums[lowPointer]];
            lowPointer++;
            midPointer++;
        } else if(nums[midPointer] === 1) {
            midPointer++;
        } else {
            if(nums[midPointer] === 2 ) {
                [nums[midPointer], nums[highPointer]] = [nums[highPointer], nums[midPointer]];
                highPointer--;
            }
        }
    }

    return nums;
};

console.log(sortColors([1,2,0]));
