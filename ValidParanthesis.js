function validParanthesis(str) {
  let stack = [];
  const map = new Map();
  map.set(')' ,'(');
  map.set(']' ,'[');
  map.set('}' ,'{');

  for(let i = 0; i < str.length; i++) {
    if(str[i] == '(' || str[i] ==  '[' || str[i] == '{' ) {
      stack.push(str[i]);
    } else {
      if(!(map.get(str[i]) === stack.pop())) {
        return false
      }
    }
  }

  return (stack.length === 0);
}

console.log(validParanthesis('([{}])'));