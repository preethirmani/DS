//LeetCOde 242
function anagram(s,t) {
  if(s.length != t.length) return false;
  let index = 0;
  for(let i = 0; i < s.length; i++) {
    index = t.indexOf(s[i]);
    if(index === -1) {
      return false;
    }
    t = t.replace(t[index],'');
  }
  return true;
}

console.log(anagram('anagram', 'nagaram'));