//LeetCode 242
//Finding Anagram
function anagram(s, t) {
  if(s.length != t.length) {
            return false;
        } else {
          let index = 0
            for(let char of s) { //b
                index = t.indexOf(char);
                console.log(`index ${index} of ${char}`);
                if(index === -1) {
                    return false;
                } else {
                    t = t.replace(index, '');
                    console.log(`t after replacing ${t}`);
                }
            }
            return true;
        }
  }


let s = "anagram", t = "nagaram";
let s1 = "bbcc", t1 = "ccbc";
console.log(anagram(s, t));
console.log(anagram(s1, t1));
anagram(s1, t1);

let str = 'abcd';
console.log('String before replacing', str);
str = str.replace(1,'');
console.log(str);
