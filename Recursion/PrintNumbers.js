/** Problem 2:
Write a recursive function to print an array in the following order. [0] [n-1] [1] [n-2] ......... ......... [(n-1)/2] [n/2]
Input:
5
1 5 7 8 9
Output:
1 9
5 8
7 7 */

function printNumbers(nums) {
  
  function recursivePrint(i) {
    let n = nums.length;
    let mid = Math.floor(n/2);
    if(i > mid) return;

    console.log(`${nums[i]} ${nums[(n - 1) - i]}`);
    recursivePrint(i+1);
  }

  return recursivePrint(0);

}

console.log(printNumbers([1, 5, 7, 8, 9]));