/**Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */
function longestCommonPrefix (s) {
  if(s.length === 0) return '';
  let prefix = s[0];
  for(let i = 1; i < s.length; i++) {
    let j = 0;
    while( j < prefix.length && j < s[i].length && prefix[j] === s[i][j]) {
      j++;
    }
    prefix = prefix.substring(0, j);
    if(prefix === '') break;
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))