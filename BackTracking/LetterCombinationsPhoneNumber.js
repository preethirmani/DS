function letterCombinations(digits) {
    if (!digits) return [];
    
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    const result = [];
    
    function backtrack(index, combination) {
        if (combination.length === digits.length) {
            result.push(combination);
            return;
        }
        
        const currentDigit = digits[index];
        const letters = phoneMap[currentDigit];
        
        for (let letter of letters) {
            backtrack(index + 1, combination + letter);
        }
    }
    
    backtrack(0, '');
    
    return result;
}

// Example usage:
console.log(letterCombinations('23'));
