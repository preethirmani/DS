/** Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

 */

function shortestPath(grid) { // [ [0,1],[1,0] ];
  let n = grid.length; // 2
 if(grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1; 

 const dirs = [
  [-1,-1], [-1,0], [-1,1],
  [0,-1], [0,0], [0,1],
  [1,-1], [1,0], [1,1]
 ];

 const queue = [[0,0,1]];

 grid[0][0] = 1; //marking first grid as visited; // [[1,1], [1,0]]

 while(queue. length > 0) {
  const [x,y, dist] = queue.shift(); // [1,1,2]

  if(x === n-1 && y === n-1) return dist; 

  for(const [dx,dy] of dirs) {
    let nx = x + dx; // 1
    let ny = y + dy; // 1

    if(nx >= 0 && nx < n && ny >= 0 && nx < n  && ny < n && grid[nx][ny] === 0) {
      queue.push([nx, ny, dist+1]); //[1,1,2]
      grid[nx][ny] = 1; // grid = [[1,1] , [1,1]]
    }
  }
 }
 return -1;

}

console.log(shortestPath([[0,1], [1,0]]));
console.log(shortestPath([[0,0,0],[1,1,0],[1,1,0]]));