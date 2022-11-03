/** Given 2 non empty  arrays of integers, write a function that determines whether the second array is the subsequence of the first one
 * 
 * A subsequent of an array is a set of numbers that aren't necessarily adjacen in the array but that are in the same order as they appear in   the array. For example the numbers [1,3,4] forms a subsequence of the array [1,2,3,4] and so do the number [2,4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
 * 
 * Sample Input: [5,1,22,25,6,-1,8,10]
 * Sequence: [1,6,-1,10]
 */

function isValidSubSequence(array, sequence) {
  var indx = 0;
  for(var i = 0; i < array.length; i++) {
    if(sequence[indx] === array[i]) {
      indx++;
    }
  }
  return sequence.length == indx;

}