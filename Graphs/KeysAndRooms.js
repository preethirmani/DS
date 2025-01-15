function canVisitAllRooms(rooms) {
  const visited = new Set();

  function dfs(room) {
    if(visited.has(room)) return;
    visited.add(room);

    for(let key of rooms[room]) {
      console.log('Key', key);
      dfs(key);
    }
  }

  dfs(0);
  return visited.size === rooms.length;
}

let rooms = [[1,3],[3,0,1],[2],[0]]
//console.log(canVisitAllRooms(rooms))
let rooms1 = [[1], [0,2], [0,1]]
console.log(canVisitAllRooms(rooms1))
// visited = {0, 1, 2, 0, 1}