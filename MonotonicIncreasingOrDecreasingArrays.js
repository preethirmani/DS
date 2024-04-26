function isMonotonic (nums) {
  let increasing = true;
  let decreasing = true;

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i-1]) {
      decreasing = false;
    } else if(nums[i] < nums[i-1]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
}

console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic(nums = [6,5,4,4]));
console.log(isMonotonic(nums = [1,3,2]));

// incr = true; decre = false; i = 1
//nums = [6,5,4,4] incr = false; decr = true;
//nums = [1,3,2] incr = false; decr = false;