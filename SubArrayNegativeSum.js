function subArrayNegativeSum(arr, sum) {
  var currSum = 0;
  var sumMap = new Map();
  var start = 0;
  var end = -1;

  for(var i = 0; i < arr.length; i++) {
    currSum = currSum + arr[i];
    
    if(currSum-sum == 0) {
      start = 0;
      end = i;
      console.log([start,end])
      return 'SubArray Sum found between the indices '+start+','+end;
    }

    if(sumMap.has(currSum-sum)) {
      start = sumMap.get(currSum-sum)+1;
      end = i;
      console.log([start,end]);
      return [start, end];
    } else {
      sumMap.set(currSum,i);
    } 
    console.log(sumMap);
  }
  console.log(sumMap);
  console.log('sum not found');
  return 'sum not found'
}


var arr2 = [10,2,-2,-20,10];
var arr3 = [-10, 0, 2, -2, -20, 10];
var arr1 = [1, 4, 20, 3, 10, 5]

subArrayNegativeSum(arr2, -10);
//subArrayNegativeSum(arr3, 20);
//subArrayNegativeSum(arr1, 33);
