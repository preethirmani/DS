//Reverse Array using Recursion
// using an offset variable to traverse through the array, swap and check midpoint
// base case if my offset reaches midpoint will return array
//two pointers

function reverseArray(array) {
  return recursiveReverse(array, 0); // 0 is the offset 
}

function recursiveReverse(array, offset) {
  let n  = array.length;
  if(offset === Math.floor(n/2)) return array;
  [array[offset], array[(n-1) - offset]] = [array[(n-1) - offset], array[offset]];
  return recursiveReverse(array, offset+1);
}

console.log(reverseArray([1,2,3,4,5,6,7]));
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));