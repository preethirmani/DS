//LeetCode 242
//Finding Anagram
function anagram(s, t) {
  if(s.length != t.length) {
    return false;
  } else {
    let index = 0;
    for(let i = 0; i < s.length; i++) {
      index = t.indexOf(s[i]);
      if(index == -1) {
        console.log('returning false');
        return false;
      } else {
        t = t.replace(t[index],"");
      }
    }
    console.log('returning true');
    return true;
  }
}

let s = "anagram", t = "nagaram";
let s1 = "anagram", t1 = "asgaras";
anagram(s, t);
anagram(s1, t1);
