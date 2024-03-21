function reverseDigit(num) {
  
  var reverseNum = 0;
  while (num > 0) {
    reverseNum = reverseNum * 10 + num % 10;
    num = Math.floor(num / 10)
  }
  console.log(reverseNum);
  return reverseNum;
} 

reverseDigit(15);
reverseDigit(165);