

function bfs (graph, source) {
  const queue = [source];
  while(queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    if(graph[current]) {
      for(let neighbor of graph[current]) {
        queue.push(neighbor)
      }
    }
  }
}



//queue = [a, b, c, b, d, e, c, f, g]


const graph = {
  a : ['b', 'c'],
  b : ['d', 'e'],
  c : ['f', 'g'],
  d : [],
  e : [],
  f : [],
  g : []
}

bfs(graph, 'a');