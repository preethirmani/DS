function printSpiral(arr) {
  var top = 0;
  var bottom = arr.length-1;
  var left = 0;
  var right = arr.length - 1;
  var i = 0;
  var dir = 0;
  var result = [];

  while ( top <= bottom && left <= right) {
    if(dir === 0) {
      for(i = left; i <= right; i++) {
        result.push(arr[top][i]);
      }
      top++;
    } else if( dir == 1) {
        for(i = top; i <= bottom; i++) {
          result.push(arr[i][right]);
        }
        right --;
    } else if(dir == 2) {
      for ( i = right; i >= left; i--) {
        result.push(arr[bottom][i])
      }
      bottom--;
    } else if(dir == 3) {
      for(i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left++
    }
    dir = (dir + 1) % 4
  }
  console.log(result);

}

var arr = [[1, 2, 3, 4], [5,6,7,8],[9,10,11,12],[13,14,15,16]];
printSpiral(arr);
