var summaryRanges = function(nums) {
    let start = nums[0];
    let end = nums[0];
    var result = [];
    let n = nums.length; //[//[0,2,3,4,6,8,9]
    //i = 6; start = 6; end = 6 ; result = [0,[2,4],6, ] n = 7
    for(let i = 0; i < n ; i++) { 
        if(i != n - 1) {
            if(nums[i+1] - nums[i] > 1) {
                end = nums[i];
                if(start === end) {
                result.push(`${end}`)
                }else {
                result.push(`${start}->${end}`)
                }
                start = nums[i+1];
            
            }
            
        } else {
            if(nums[i] - nums[i-1] > 1) {
                end = nums[i];
                result.push(`${end}`)
            } else {
              end = nums[i]
              result.push(`${start}->${end}`);
            }
            
            
        }
    }
    return result;
};

var result = summaryRanges([0,1,2,4,5,7])
var result1 = summaryRanges([0,2,3,4,6,8,9])
console.log(result)
console.log(result1)