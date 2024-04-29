/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 * Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

 */


function permutations(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    const generatePermutations = (currentPermutation, remainingNums) => {
        if (remainingNums.length === 0) {
            result.push(currentPermutation.slice());
            return;
        }
        
        for (let i = 0; i < remainingNums.length; i++) {
            if (i > 0 && remainingNums[i] === remainingNums[i - 1]) continue;
            const nextPermutation = currentPermutation.concat(remainingNums[i]);
            const nextRemainingNums = [...remainingNums.slice(0, i), ...remainingNums.slice(i + 1)];
            generatePermutations(nextPermutation, nextRemainingNums);
        }
    };
    
    generatePermutations([], nums);
    return result;
}

console.log(permutations([1, 1, 2]));


function permuteUnique(nums) { //[1,1,2]
   const result = [];
   const visited = new Array(nums.length).fill(false); //[false, false, false]

   function backtrack(temp) {
    if(temp.length === nums.length) {
        result.push([...temp]);
        return;
    }
    for(let i = 0; i < nums.length; i++) {
        if(visited[i] || i > 0 && nums[i] === nums[i-1] && !visited[i-1]) {
            continue;
        }
        visited[i] = true;
        temp.push(nums[i]);
        backtrack(temp);
        temp.pop();
        visited[i] = false;
    }
   }
backtrack([]);
return result;

}

console.log(permuteUnique([1,1,2]));