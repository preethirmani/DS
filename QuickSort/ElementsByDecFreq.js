function printByDecreasingFrequency(arr){
  var mapCount = new Map();
 

  for(var i = 0 ; i < arr.length; i++) {
    if(mapCount.has(arr[i])){
      mapCount.set(arr[i], mapCount.get(arr[i])+1);
    } else {
      mapCount.set(arr[i], 1);
  
    }
  }
  console.log(mapCount);
  console.log(mapIndex);

  arr.sort(function(n1, n2){
    let f1 = mapCount.get(n1);
    let f2 = mapCount.get(n2);
    return f2-f1;
  })

  console.log(arr.join(' '));
}

printByDecreasingFrequency([2,5,2,8,5,6,8,8]);