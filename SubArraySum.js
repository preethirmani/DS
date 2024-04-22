function subArraySum(arr, actualSum) {  //[1, 4, 20, 3, 10, 5], 19
  var pointer1 = 0; 
  var pointer2 = 0;  
  var currSum = arr[pointer2]; //1

  if(arr.length > 0) {
      while( pointer2 <= arr.length) { //p2 = 2; p1 = 1 cSum = 16
            if(currSum < actualSum) {
              pointer2++; 
              currSum = currSum + arr[pointer2]; 
          } else if (currSum > actualSum) {
            currSum = currSum - arr[pointer1]; //13-1 = 12
            pointer1++; //1
          }
            else if (currSum == actualSum) {
          return [pointer1, pointer2];     
         } else {
          return 'No subarray with the sum exists!'
         }
    }
  }
}

var result = subArraySum([1,2,3,7,5], 12);
console.log('Indices::'+result);

var result1 = subArraySum([1, 4, 20, 3, 10, 5], 33);
console.log('Indices::'+result1);

var result3 = subArraySum([1, 4, 20, 3, 10, 5], 19);
console.log('Indices::'+result3);

var result4 = subArraySum([1, 4, 20, 3, 10, 5], 100);
console.log('Indices::'+result4);

var result5 = subArraySum([1,2,3,4,5,6,7,8,9,10], 15);
console.log('Indices::'+result5);

var result6 = subArraySum([10,2,-2,-20,10], -10);
console.log('Result6 Indices::'+result6);




