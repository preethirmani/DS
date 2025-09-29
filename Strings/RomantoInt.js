function romanToInt(s) {
  let result = 0;
  const obj = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
        
    }
    for(let i = 0; i < s.length; i++) {
      let num1 = obj[s[i]];
      let num2 = obj[s[i+1]];
      if(num1 < num2) {
        result = result + num2 - num1;
        i++;
      } else {
        result = result + num1
      }
    }
    console.log(result);
    return result;
}

'XXIV'
romanToInt('II')
romanToInt('XXIVX')
romanToInt("LVIII")
romanToInt("MCMXCIV")