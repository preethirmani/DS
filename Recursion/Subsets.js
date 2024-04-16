/** Print all the subsets of a set [1,2,3] 
 * Set cannot contain duplicates, hence subsets of a set cannot contain any duplicate.
 * 2 ^ n subsets can be generated for a set of n elements
 * [[],[1], [2], [3], [1,2], [1,3], [2], [2,3], [3], [1,2,3]]; 
*/

function printAllSubsets(arr) {
  const result = [];
  getAllSubsets(arr, result, [], 0);
  return result;
}

function getAllSubsets(arr, result, subset, index) { 
  console.log('subset',subset, 'subset.slice', subset.slice());
    result.push(subset.slice());
    for(let i = index; i < arr.length; i++) {
      subset.push(arr[i]);
      getAllSubsets(arr, result, subset, i + 1);
      subset.pop();
    }
     
}

console.log(printAllSubsets([1,2,3]));
