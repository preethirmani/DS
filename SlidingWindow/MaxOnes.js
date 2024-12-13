var longestOnes = function(nums, k) {
    let zeros_count = 0;
    let max_win = 0;
    let win = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === 0) {
            zeros_count++;
        }
        while( zeros_count > k) {
            if(nums[left] === 0) {
                zeros_count--;
            }
            left++;
        }
        max_win = Math.max(max_win, (right - left)+1);
    }
    return max_win;
                   
};


console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))