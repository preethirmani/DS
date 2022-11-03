var array = [1,2,3,4,5,6,7,8,9,10];
function funcBinary(array, target) {
  var first = 0;
  var last = array.length-1;
  while(first <= last) {
    var midPoint = Math.floor((first + last) /2);

    if(array[midPoint] ===  target) {
      return midPoint;
    } else if(array[midPoint] < target) {
      first = midPoint + 1;
    } else
    {
      last = midPoint - 1;
    }
  }
  
  return 'Target Not Found';
}

var result = funcBinary(array, 10);
console.log('Result:: ' + result);
