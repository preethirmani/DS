function generateparanthesis(n) {
  let result = [];
  function recursive(str, left, right) {
    if(str.length === 2 * n) {
      result.push(str);
      return;
    }
    if(left < n) {
      recursive(str+'(', left+1, right);
    }
    if(right < left) {
      recursive(str+')', left, right + 1);
    }
  }

  recursive('', 0, 0);
  return result;

}

console.log(generateparanthesis(3));