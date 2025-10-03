function isBalanced(s) {
    // Write your code here
    if(s.length == 0 || s== null) return 'NO'
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    let stack = [];
    for(let ch of s) {
      console.log('ch:' , ch)
        if(ch in map) {
            console.log('map[ch]', map[ch]);
             let top_char = stack.length > 0 ?
                            stack.pop() :
                            '#';
            console.log('top_char', top_char)
            if(!(map[ch] == top_char)) {
                console.log('NO');
                return;
            }
            
        } else {
            stack.push(ch);
            
        }
    }
    console.log('YES');
    return 'YES';

}

isBalanced('{[(])}');