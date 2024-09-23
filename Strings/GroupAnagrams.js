var groupAnagrams = function(strs) {
    const map = new Map();
    for(let str of strs) {
        const charCount = new Array(26).fill(0);
  
        for(let char of str) {
          charCount[char.charCodeAt(0) - 'a' .charCodeAt(0)]++ //e
           console.log(charCount);

        }
        const key = charCount.join(',');
        console.log(key);
        if(!map.has(key)) {
          map.set(key,[]);
        } else {
          map.get(key).push(str);
        }
    }
    return Array.from(map.values());
};
let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))