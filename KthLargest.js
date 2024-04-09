/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?
 */

//In a sorted array (ascending) kth largest element is found at the index :- 
//array.length - k;

function kthLargest(nums, k) {
  k = nums.length - k;             
  function quickSelect(l,r) {   
    let pivotValue = nums[r];  
    let pivotIndex = l;        
    for(let i = l; i < r ; i++) {  
      if(nums[i] <= pivotValue ) { 
        [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
        pivotIndex++;
      } 
    }
    [nums[pivotIndex], nums[r]] = [nums[r], nums[pivotIndex]];
    if(pivotIndex === k) return nums[pivotIndex];
    else if(pivotIndex < k) {
      return quickSelect(pivotIndex+1, r);
    } else {
     return quickSelect(l, pivotIndex-1);
    }
  }
  return quickSelect(0, nums.length-1);   
}

console.log(kthLargest([3,2,1,5,6,4], 2)  );
console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4))
