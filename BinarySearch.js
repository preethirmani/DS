const binarySearch = (array, target) => {
  var rightPointer = array.length-1;
  var leftPointer = array[0];
  var midpointer = 0;

  for(var i = 0 ; i < array.length; i++) {
    midpointer = Math.floor(rightPointer + leftPointer) / 2;
    if(array[midpointer] === target) {
      return array[midpointer];
    } else if(array[midpointer] > target) {
      rightPointer = midpointer - 1;
    } else if(array[midpointer < target]) {
      leftPointer = midpointer + 1;
    }
  }

  return 'Target Not Found';
}

binarySearch([4,7,13,28,21,30], 7);