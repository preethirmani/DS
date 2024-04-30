function calculate(s) {
  let stack = [];
  let result = 0;
  let num = 0;
  let sign = 1;

  for(let i = 0; i < s.length; i++) { // (1+(4+5+2)-3)+(6+8)
    let char = s[i];
    if(/[0-9]/.test(char)) {
      num = num * 10 + parseInt(char);  //num = 0
    } else if(char === '+') {
      result = result + sign * num; // result = 1
      sign = 1;
      num = 0;
    } else if(char === '-') {
      result = result + num * sign;
      num = 0;
      sign = -1;
    } else if(char === '(') {
      stack.push(result); //stack = [0,1,1, 1]
      stack.push(sign);

      result = 0;
      sign = 1;

    } else if(char === ')') {
      result = result + sign * num;
      num = 0;
      result = result * stack.pop();
      result = result + stack.pop();

    }
  }
  result = result + sign * num;
  return result;
}

console.log(calculate('1+1'));
console.log(calculate('(1+(4+5+2)-3)+(6+8)'));