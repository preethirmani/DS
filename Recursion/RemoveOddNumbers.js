/** Problem 3:
Write a recursive program to remove all odd integers from an array. You must not use any extra array or print anything in the function. Just read input, call the recursive function, then print the array in main(). 
Input:
6
1 54 88 6 55 7
Output:
54 88 6
*/

//1 54 88 6 55 7 = 6
//54 88 6 55 7 = 5 

//
function removeOdd(nums) {
  

  function recursiveRemoval(i, nums) { // 54 88 6  
    

    let n = nums.length - 1; // n = 3

    if( i > n ) return; 

    if( nums[i] % 2 === 1) {

      nums.splice(i, 1);

    } else {

      i++;

    }

    recursiveRemoval(i, nums);

  }
  recursiveRemoval(0, nums);

  return nums;
}

console.log(removeOdd([1, 54, 88, 6, 55, 7]))
