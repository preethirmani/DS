function subArraySum(arr, actualSum) {
  var pointer1 = 0;
  var pointer2 = 0;
  var currSum = arr[pointer2];

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



