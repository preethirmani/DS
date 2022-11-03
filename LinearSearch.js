
function linearSearch(array, key) {

for(var i = 0; i < array.length; i++) {
  if(array[i] === key) {
    return i
  }
}
 return 'target not found';
}

function createArr(size) {
    var arr = [];
    for(var i = 0; i < size; i++) {
        arr.push(i);
    }
    return arr;
}
      
var result = linearSearch(createArr(15), 13);
console.log("result ::"+result);