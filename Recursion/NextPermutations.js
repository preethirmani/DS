/**** A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory. ****/


function nextPermutation(nums) { //2 1 5 4 3 0 0
  //first find the first index from right where nums[i] is lesser than nums[i+1]
  // if(i > = 0) then find the first index j where nums[j] is > than nums[i]

  let i = nums.length - 2;
  while(i >= 0 && nums[i] >= nums[i+1] ) {
    i--; //1
  }
  if(i >= 0) {
    let j = nums.length - 1;
    while(nums[j] <= nums[i]) {
      j--; //4
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]; //2 3 0 0 1 4 5
  }
  
  reverse(nums, i+1);
}

function reverse(nums, left) { //0 0 1 4 5
 let right = nums.length - 1;
 while(left < right) {
  [nums[left], nums[right]] = [nums[right], nums[left]];
  left--;
  right++;
 }
 return nums;
}


console.log(nextPermutation([1,2,3]));
