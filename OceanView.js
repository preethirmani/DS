//1762 Building with an ocean view
function findBuildings(arr) {
  var n = arr.length;
  var max = arr[n-1];
  var result = [n-1];

  for(var i = n-2; i >= 0; i--) {
    if(arr[i] > max) {
      max = arr[i];
      console.log(max);
      result.unshift(i);
      console.log(result);
    }
  }
  return result;
}

findBuildings([4,2,3,1]);