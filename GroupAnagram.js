//LeetCOde : 49 : Group Anagram
/**Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]] */

function groupAnagram(strs) {
  let map ={};
  for(let str of strs) {
    let sortedString = str.split('').sort().join('');
    if(map[sortedString]) {
      map[sortedString].push(str);
    } else {
      map[sortedString] = [str];
    }
  }
  return Object.values(map);
}
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))