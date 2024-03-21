function quickSort(arr) {
   console.log('GivenArr  : '+arr);
  if(arr.length <= 1) {
    return arr;
  }
  var highIndex = arr.length - 1;
  var lowIndex = 0;
  var sortedArray = recursiveSort(arr, lowIndex, highIndex)
 
  console.log('SortedArr : '+sortedArray);
  return sortedArray;
}

function recursiveSort(arr, lowIndex, highIndex) {
  
  if(lowIndex >= highIndex ) {
    return arr;
  }
  
  var pivot = arr[highIndex];
  var leftPointer = lowIndex;
  var rightPointer = highIndex - 1;

  while(leftPointer < rightPointer) {
      while(arr[leftPointer] <= pivot && leftPointer < rightPointer) {
        leftPointer++;
      } 
      while(arr[rightPointer] >= pivot && leftPointer < rightPointer) {
        rightPointer --;
      }
      swap(arr, leftPointer, rightPointer);
  }
  if(arr[leftPointer] > arr[highIndex]) {
    swap(arr, leftPointer, highIndex);
  }
  recursiveSort(arr, lowIndex, leftPointer-1);
  recursiveSort(arr, leftPointer+1, highIndex);
  return arr;

}

function swap(arr, leftPointer, rightPointer){
  var temp = arr[rightPointer];
  arr[rightPointer] = arr[leftPointer];
  arr[leftPointer] = temp;
}

quickSort([1,8,3,9,4,5,7]);
quickSort([7,10,4,3,20,15]);