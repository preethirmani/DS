//Solution for GeekofGeeks Problem
/*Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S and return the left and right index(1-based indexing) of that subarray. */

function subArraySum(arr, actualSum) {
  var pointer1 = 0;
  var pointer2 = 0;
  var currSum = arr[pointer2];

  if(actualSum == 0) {
    return -1;
  }

  if(arr.length > 0) {
      while( pointer2 <= arr.length) {
            if(currSum < actualSum) {
              pointer2++;
              currSum = currSum + arr[pointer2];
          } else if (currSum > actualSum) {
            currSum = currSum - arr[pointer1];
            pointer1++;
          }
            else if (currSum == actualSum) {
          return [++pointer1, ++pointer2];     
         } else{
          return -1;
         }
    }
  }
}





var result4 = subArraySum([1,2,3,4], 5);
console.log('Indices::'+result4);

var result5 = subArraySum([142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191, 43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83, 130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71, 30, 178, 174, 98, 113], 665);
console.log('Indices::'+result5);

var result6 = subArraySum([1,2,3,4], 0);
console.log('Indices::'+result6);




