function palindromeNumber(x) {
  if(x < 0) return false;
  let num = x;
  let reversedNum = 0;
  console.log('num', num);
  while(num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    //0 + 
    num = Math.floor(num / 10);
  }
  return x===reversedNum

}

console.log(palindromeNumber(121));