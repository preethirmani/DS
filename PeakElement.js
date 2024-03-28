function peakElement(nums) {
    let n = nums.length;
    if(n == 1) return 0;
    if(nums[0] > nums[1]) return 0;
    if(nums[n-1] > nums[n-2]) return n-1;
    let low = 1;
    let high = n-2;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log('low',low);
        console.log('high',high);
        console.log('mid',mid);
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]){
            return mid;
        } else if(nums[mid] > nums[mid-1]) {
          console.log('inside else if')
            low = mid + 1;
            break;
        } else {
           console.log('inside else')
            high = mid - 1;
            break;
        }
    }
    return -1;
    
}

console.log(peakElement([1,1,3,8,6,5,2,1]));

let high = Number.MAX_VALUE;
let low = Number.MIN_VALUE;

console.log(high)
