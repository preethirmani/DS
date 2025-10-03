function isValid(s) {
    let obj = {}
     for(let ch of s) {
        console.log(ch)
        obj[ch] = obj[ch] ? obj[ch]+1:1;
    }
    console.log(obj);
  }


isValid('aabbcd');