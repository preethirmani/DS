function reverseString(s) {
  var len = s.length;
  var result = "";
  if(len > 1) {
    for(var i = len-1; i >= 0; i--) {
      result += s[i];
    }
    console.log(result);
    return result;
  }else {
    return s;
  }
}

reverseString("Hello");
reverseString("it is raining now!");
