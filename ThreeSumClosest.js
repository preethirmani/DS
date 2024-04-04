function threeSumClosest(nums, target) {
  nums.sort((a,b) => a - b);
  let closestSum = Number.MAX_VALUE;
  //let closestDistance = 0;
  for(let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const currentDistance = sum - target;
      const closestDistance = closestSum - target;
      if(Math.abs(currentDistance) < Math.abs(closestDistance)) {
        closestSum = sum;
      }
      if(sum > target) {
        right--;
      }else if(sum < target) {
        left++;
      }else{
        return sum;
      }
    }
  }

  return closestDistance;
}

console.log(threeSumClosest([-1,2,1,-4], 2));
//[-4, -1, 1, 2]