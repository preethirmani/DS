/** Squaring elements in an array and sorting in ascending order*/
function sortedSquaredArray(array) {
  for(var i = 0; i < array.length; i++) {
    array[i] = array[i]*array[i]
  }
  
  return array.sort(( a, b) => a - b);
}

var result = sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]);
console.log(result);