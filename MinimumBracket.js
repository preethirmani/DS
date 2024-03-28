//LeetCode 1249 Minimum Remove to make valid Paranthesis
/**
 * Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
 */

function minRemove(s) {
  let stack = [];
  let str = s.split('');
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      stack.push(i);
    }
    if(str[i] === ')') { 
      if(stack.length === 0) {
        str[i] = '';
       
      } else {
        stack.pop();
      }
    }
  }
    for(let i = 0 ; i < stack.length; i++) {
      let index = stack[i];
      str[index] = '';
    }
    return str.join('');
}

console.log(minRemove("lee(t(c)o)de)"))
console.log(minRemove('))(('));