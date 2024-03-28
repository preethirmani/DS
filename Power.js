function power(x,n) {
  if(x === 0) return 0;
  if(n === 0) return 1;
  let result;
  let r = Math.floor(n/2);
  

result = computerPower(Math.abs(x*x), Math.abs(r));
if(n % 2 === 1) {
  if(x < 0) {
    console.log('x is negaitve');
    result = -Math.abs( x * result) ;
    console.log('result', result);
  } else {
    result = x * result;
  }
}
return n < 0 ? 1/result : result;

}

function computerPower(x,n) {
  if(n === 1) return x;
  return x * computerPower(x, n-1);
}

console.log(power(2,5));
console.log(power(-2,5));
console.log(power(2, -4));