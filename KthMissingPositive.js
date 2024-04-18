function kthMissingPositive(arr, k) {
  let currentNumber = 1;//9
    let missingCount = 0;//5

    for(let i = 0; i < arr.length; i++) {
        while(currentNumber < arr[i]) {
            missingCount++;
            if(missingCount === k) {
                return currentNumber;
            }
            currentNumber++;
        }
        currentNumber++;
    }

    while(missingCount < k) {
        missingCount++;
        if(missingCount === k) {
            return currentNumber;
        }
        currentNumber++;

    }

    return -1;
}

console.log(kthMissingPositive([2,3,4,7,11], 5));
console.log(kthMissingPositive([1,2,3,4], 2));