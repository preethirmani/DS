//charCodeAt() returns the Unicode of the character at a specified position in a string.
let testArray = new Array(26).fill(0);
console.log(testArray);
console.log(testArray.length);
console.log('','a'.charCodeAt(0))
let count = 'e'.charCodeAt(0) - 'a'.charCodeAt(0);
console.log('count', count);
console.log(testArray[count])
testArray[count]++; // this does testArr[count] = testArr[count]+1;
console.log(testArray)