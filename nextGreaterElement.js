function nextGreaterElement(arr) {
  var output = [];
  var next;
  for(var i = 0; i < arr.length; i++) {
    next = -1;
    for(var j = i+1; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        next = arr[j];
        break
      }
    }
    output.push(next);
  }
  
  console.log(output);
}
nextGreaterElement([4,5,2,25]);
nextGreaterElement([13 , 7, 6 , 12 ]);