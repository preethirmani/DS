function subsequence(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  

  function sequence(i, j) {
    if(i === n || j === m) {
      return 0;
    } else if(s1[i] === s2[j]) {
      return 1 + sequence(i+1, j+1);
    } else {
      return Math.max(sequence(i+1, j), sequence(i, j+1));
    }
  }
  let c = sequence(0,0);
  return c; 
}

let result = subsequence('abcd', 'ced');
console.log(result);