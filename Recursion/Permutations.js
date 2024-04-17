/** str = 'ABC' */

function permutations(str) {
  
  function generatePermutaions(str, l, r) {
    if(l == r) console.log(str); 
    else {
      for(let i = l; i <= r; i++) {
        if(i > 0 && str[i] == str[i-1]) {
          continue;
        }
        str = swap(str, l, i);
        generatePermutaions(str, l + 1, r);
        str = swap(str, l, i);
      }
    }
  }
  let n = str.length - 1;

  return generatePermutaions(str, 0, n)
  
}

function swap(str, i, j) {
  let charArr  = str.split('');
  [charArr[i], charArr[j]] =  [charArr[j], charArr[i]]
  return charArr.join('');
}

console.log(permutations('ABC'));
console.log(permutations('AAB'));