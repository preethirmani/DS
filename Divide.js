function divide(dividend, divisor) {
  let quotient = 0;
  let num = Math.abs(dividend);
  let div = Math.abs(divisor);

  while(num >= divisor) { 
    num = num - div;
    quotient++;
  }

  return (dividend < 0 || divisor < 0 ) ? -Math.abs(quotient) : quotient;
}

console.log(divide(10,-5));
console.log(divide(81,3));
console.log(divide(10,3));