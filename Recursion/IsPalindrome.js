function checkPalindrome(str) {
    return isPalindrome(str, 0);
}

function isPalindrome(str, offset) {
  let n = str.length;
  if(offset === Math.floor(n/2)) return true;
  if(str[offset] != str[(n-1) - offset]) return false;

  return isPalindrome(str, offset+1);
}

console.log(checkPalindrome('kayak'));
console.log(checkPalindrome('kayaks'));