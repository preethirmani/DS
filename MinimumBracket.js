var minRemoveToMakeValid = function(s) {
    let lp = 0;
    let rp = s.length - 1;
    while(lp < rp) {
      if(str[rp] == '(' || str[rp] == ')') {
        if(str[rp] == '(') {
          str = str[rp].replace('(','');
          rp -= 1;
        } 
       if(str[rp] == ')' && str[lp] == '(') {
          lp += 1;
          rp -= 1;
        }
        if(str[lp] != '(' || str[lp] != ')') {
          lp += 1;
        }
        
      }else {
        if(str[lp] == '(' || str[lp] == ')') {
          if(str[lp] == ')') {
            str = str.replace(str[lp],'');
            lp += 1;
            rp -= 1;
          } else {
            if(str[lp] == '(') {
              rp -= 1;
            }
          }
        }
      }
    }
    console.log(`lp : ${lp} , rp : ${rp}`);
    return s;
};
var str = 'true'
for(let i = 0; i < str.length; i++ ){
  if(str[i] == 'u') {
    console.log('inside if')
    str = str.replace(str[i],'')
  }
  console.log(str[i]);
}

//console.log(minRemoveToMakeValid(')lee(t(c)o)de)'));