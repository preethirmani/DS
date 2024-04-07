function reverseArray(nums, start, end) {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

rotateArry([1,2,3,4,5,6,7], 3);