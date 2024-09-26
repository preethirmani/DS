let arr = [3,30,30,4,30,45,1,1,2,3,4];
let map = new Map();
for(let a of arr) {
  if(!map.has(a)) {
    map.set(a, 1);
  } else {
    map.set(a, map.get(a)+1);
  }
}
 console.log(map);
 console.log(map.entries()); 
 /**  Result
  * {
  [ 3, 2 ],
  [ 30, 3 ],
  [ 4, 2 ],
  [ 45, 1 ],
  [ 1, 2 ],
  [ 2, 1 ]
}
  */

console.log(map.values()); 
/**
 * [Map Iterator] { 2, 3, 2, 1, 2, 1 }
 */

console.log(map.keys()); 
/**
 * [Map Iterator] { 3, 30, 4, 45, 1, 2 }
 */

/** sorting the map based on Keys */
//Ascending
const sortedMapAscending = new Map([...map.entries()].sort((a,b) => a[0] - b[0]))
console.log(sortedMapAscending);
/** Map(6) { 1 => 2, 2 => 1, 3 => 2, 4 => 2, 30 => 3, 45 => 1 } */

//Descending
const sortedMapDescending = new Map([...map.entries()].sort((a,b) => b[0]-a[0]));
console.log(sortedMapDescending);
/** Map(6) { 45 => 1, 30 => 3, 4 => 2, 3 => 2, 2 => 1, 1 => 2 } */

/** sorting the map based on Values */
//Ascending
const sortMapValuesAscending = new Map([...map.entries()].sort((a,b) => a[1]-b[1]));
console.log(sortMapValuesAscending);

/** Map(6) { 45 => 1, 2 => 1, 3 => 2, 4 => 2, 1 => 2, 30 => 3 } */

//Descending
const sortMapValuesDescending = new Map([...map.entries()].sort((a,b) => b[1] - a[1]));
console.log(sortMapValuesDescending);
/** Map(6) { 30 => 3, 3 => 2, 4 => 2, 1 => 2, 45 => 1, 2 => 1 } */

//looping through any map
for(let [key,value] of map) {
  console.log(key);
  console.log(value);
}

/**
 * 
 *  3
    2
    30
    3
    4
    2
    45
    1
    1
    2
    2
    1
 */
