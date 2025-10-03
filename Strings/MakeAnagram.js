function makeAnagram(a, b) {
    // Write your code here
    let res = 0;
    let map = new Map();
    for(let ch of a ) {
     if(map.has(ch)) {
        map.set(ch, map.get(ch) + 1)
     } else {
        map.set(ch, 1);
     }
    }
   
    for(let ch of b) {
      if(!map.has(ch)) {
       res = res + 1;
      } else {
        map.set(ch,map.get(ch)-1);
      }
    }
    
    
    let count = Array.from(map.values().filter((value) => value > 0));
    res = res + count.length;
    console.log('Res:::',res);
}


makeAnagram('cde', 'dcf');