var firstMissingPositive = function(nums) {
    // [3,4,-1,1] 
    //output = [false, false, false, false]
    //           0    , 1    , 2    , 3
    let output = Array(nums.length).fill(false);
    for(let i = 0; i < nums.length; i++) {
      output[nums[i]] = true; //[false, true, false, true]
    }
    
};