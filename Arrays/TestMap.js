let map = new Map();
map.set(1,5);
map.set(2,[])
console.log(map);
map.set(1, map.get(1)+1);
console.log(map.get(1));
console.log(map.get(2).push(134));

let nums = [1,1,2,2,2,3,4]

function frequency(nums) {
  let result = [];
  let map1 = new Map();
    for(let i = 0; i < nums.length; i++) {
      if(map1.has(nums[i])) {
        console.log('Inside if')
        map1.set(nums[i], map1.get(nums[i]) + 1);
        console.log(nums[i],map1.get(nums[i]))
      } else {
        console.log('Inside else')
        map1.set(nums[i], 1);
        console.log(nums[i],map1.get(nums[i]))
      }
    }
    map1.forEach((value, key) => {
      if(value >= 2) result.push(key);
    })
    console.log(map1.values());
    console.log(result);
  }
  


frequency(nums);