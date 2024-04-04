function myAtoI(s) {
  if(s.length === 0) {
   
    return 0;
  }
 
  let minValue = -Math.pow(2,31);
  let maxValue = Math.pow(2,31) - 1;
  let sign = 1;
  let num = 0;
  let i = 0;

  while(s[i] === ' ') {
   
    i++;
  }
 
  if(s[i] === '-' || s[i] === '+') {
    console.log('if')
    sign = (s[i] === '-') ? -1 : 1;
   
    i++;

  }

  while(i < s.length && /[0-9]/.test(s[i])) {
   
    num = num * 10 + parseInt(s[i]);
    i++;
  }

  num = num * sign;
  
  if(num > maxValue) {
    return maxValue;
  }
  if(num < minValue) {
    return minValue
  }

  return num;
}

console.log(myAtoI('   -42'));