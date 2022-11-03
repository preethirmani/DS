function twoNumberSum(array, target) {
  var resultArr = [];
  var i = 0;
  var j = i+1;
  while( i < j && j < array.length) {
    if(array[i] + array[j] === target) {
      resultArr.push(array[i]);
      resultArr.push(array[j]);
      return resultArr;
    }
    i++;
    j++;
  }
  return resultArr;

}