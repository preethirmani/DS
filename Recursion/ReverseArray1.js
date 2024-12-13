/** You will be given an array of integers, write a recursive solution to print it in reverse order.
Input:
5
69 87 45 21 47
Output:
47 21 45 87 69  */

function reverseArray(nums) {

  function reverse(i) {
    if(i < 0) {
      return;
    }
    console.log(nums[i])
    reverse(i-1);
  }
  return reverse(nums.length - 1);

}
//47 21 45 87 69
reverseArray([47,21,45,87,69]);

// to reverse an existing array

function reverseArray1(nums) {

  function recursiveReverse(i) {
    let n = nums.length; //5
    let mid = Math.floor(n/2);
    if(i === mid ) return;

    [nums[i], nums[(n-1) - i]] = [nums[(n-1) - i], nums[i]]
     recursiveReverse(i+1);
  }
   recursiveReverse(0);
   return nums;
}

console.log(reverseArray1([47,21, 45, 87, 69]))