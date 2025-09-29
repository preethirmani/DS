function reverse(nums) {
  let temp ;
  let start = 0;
  let end = nums.length - 1;
  while(start < end) {
    temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
}

console.log(reverse([1,2,3,4,5,6,7,8]));

//Recursive Reverse
function reverseArray(nums) {
  return recursiveReverse(nums, 0)
}

function recursiveReverse(nums, offset) {
  if(offset === Math.floor(nums.length / 2)) return nums;
  [nums[offset], nums[nums.length - 1 - offset]] = [nums[nums.length - 1 - offset], nums[offset]];
  return recursiveReverse(nums, offset+1); 
}

console.log(reverseArray([1,2,3,4,5,6,7,8]));

let arr = [[1 , 2 , 7 ,  8] ,
           [3 , 4 , 1 ,  9] ,
           [6 , 3 , 2 ,  1]  ]
console.log('arr.length',arr.length);
console.log('aar[0].length', arr[0].length);

