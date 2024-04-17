/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * [1,2,3] = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
 */

/** .⁠ ⁠*Avoiding Reference Issues*: Without ⁠ [...nums] ⁠, you'd be pushing a reference to the ⁠ nums ⁠ array into the ⁠ result ⁠ array. Since arrays in JavaScript are reference types, any subsequent modifications to ⁠ nums ⁠ would also affect the permutations already pushed into ⁠ result ⁠. Using ⁠ [...nums] ⁠ creates a new array, so changes to ⁠ nums ⁠ won't affect the permutations in ⁠ result ⁠.

2.⁠ ⁠*Preserving Original State*: Inside the recursive function, ⁠ generatePermutations ⁠, the array ⁠ nums ⁠ is being modified as part of generating permutations. After generating a permutation, the array is backtracked to its original state. If you didn't use ⁠ [...nums] ⁠, all permutations in ⁠ result ⁠ would end up being the same, as they would all point to the same array (⁠ nums ⁠). Using ⁠ [...nums] ⁠ ensures that each permutation in ⁠ result ⁠ is a distinct array representing a different permutation of the input array.

In summary, ⁠ [...nums] ⁠ is used to create a shallow copy of the ⁠ nums ⁠ array before pushing it into ⁠ result ⁠, ensuring that ⁠ result ⁠ contains distinct permutations that won't be affected by subsequent modifications to ⁠ nums ⁠. */

function permutations(nums) {
  let result = [];

  const generatePermutaions = (nums, l, r) => {
      if(l == r) {
        //console.log(nums);
        result.push([...nums]);
        return ;
      } else {
        for(let i = l; i < r; i++) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            generatePermutaions(nums, l+1, r);
            [nums[i], nums[l]] = [nums[l], nums[i]];
        }
      }
  }

   generatePermutaions(nums, 0, nums.length);
   return result;
 
}
console.log(permutations([1,2,3]));