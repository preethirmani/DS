function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let midIndex = Math.floor(arr.length)/2;
  let left = mergeSort(arr.slice(0,midIndex));

  let right = mergeSort(arr.slice(midIndex));

  console.log('before return left', left);
  return merge(left,right);
  
}

function merge(left, right) {
   console.log('merge::::', left);

  let sortedArr = [];
  

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
 

}

console.log(mergeSort([8,3,5,4,7,6,1,2]));