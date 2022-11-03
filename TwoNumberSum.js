function twoNumberSum(array, targetSum) {
  var result = [];
  for(var i = 0 ; i < array.length; i++) {
    for(var j = i+1 ; j < array.length; j++) {
      if((array[i] + array[j] === targetSum)) {
        result.push(array[i]);
        result.push(array[j]);
        return result;
      }
    }
  }
  return result;
}

var resultArr = twoNumberSum([3,5,-4, 8, 11, 1, -1, 6], 20);
console.log(resultArr);
