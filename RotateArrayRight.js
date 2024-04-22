function reverseArray(nums, start, end) {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  console.log('nums', nums);
}

function rotateArray(nums, k){
  k = k % nums.length;
  reverseArray(nums, 0, nums.length-1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length-1);

}

rotateArray([1,2,3,4,5,6,7], 3); // [4,5,6,7,1,2,3]

