/**
 * A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

For example, a string such as "substitution" could be abbreviated as (but not limited to):
 */

function validWordAbbreviation(word, abb) {
  
  let wp = 0;
  let ap = 0;
  while(ap < abb.length && wp < word.length) {
   
    
    if(/[0-9]/.test(abb[ap])) {
      console.log('if')
      let steps = 0;
      if(abb[ap] === '0') return false;

      while(ap < abb.length && /[0-9]/.test(abb[ap])) {
        steps = steps * 10 + parseInt(abb[ap]);
        ap++;
      }
     
      wp = steps + wp;
     
    } else {    
      if(word[wp] != abb[ap]) return false;
    }
    wp++;
    ap++; 
  }
  return (wp === word.length && ap === abb.length);
}

console.log(validWordAbbreviation('substitution', 's10n'));
console.log(validWordAbbreviation('internationalization', 'i12iz4n'));