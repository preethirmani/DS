/**
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
 */

var kClosest = function(points, k) {
    let distanceMap = new Map();
    let result = [];
    for (let i = 0; i < points.length; i++) {
      let point1 = points[i][0];
      let point2 = points[i][1];   
      
      let distance = (point1 * point1) + (point2 * point2);
     if(!distanceMap.has(distance)) {
      distanceMap.set(distance, []);
     } 
     distanceMap.get(distance).push(points[i]);
    }
   //console.log('distanceMap',distanceMap);
  
    if(distanceMap.size == 1) {
    
     let d = Array.from(...distanceMap.values());
    
     result.push(...d);

    } else {
       let sortedDistance = Array.from(distanceMap.keys()).sort((a,b) => a - b);
       //console.log('sortedDistance', sortedDistance);
      let i = 0;
      while(i < k) {
       
        let d = distanceMap.get(sortedDistance[i]);
       
        result.push(...d);
        //console.log('result', result);
        if(result.length === k) {
          return result;
        }
        i++
      }
    }  
    return result;
};

console.log(kClosest([[1,3],[-2,2]], k = 1))
console.log(kClosest([[0,1],[1,0]], k = 2))
console.log(kClosest([[2,2],[2,2],[3,3],[2,-2],[1,1]], k = 4));