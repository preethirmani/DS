
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    
      this.sparseDict = {};
      for(let i = 0 ; i < nums.length; i++) {
        if(nums[i] != 0) {
          this.sparseDict[i] = nums[i];
        }
      }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let result = 0;
    for (let key in this.sparseDict) {
      if(vec.sparseDict.hasOwnProperty(key)) {
        result = result + this.sparseDict[key] * vec.sparseDict[key];
      }
    }
    return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);