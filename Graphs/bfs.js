//graph as an adjacency list
const graph = {
  1 : [2, 3],
  2 : [4],
  3 : [4],
  4 : []
};

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();

  while(queue . length > 0) {
    const node = queue.shift();
    if(! visited.has(node)) {
      console.log(node);
      visited.add(node);
      graph[node].forEach(neighbor => {
        if(!visited.has(neighbor)) {
          queue.push(neighbor)
        }
      });
    }
  }
  return visited;
}

bfs(graph, 1);