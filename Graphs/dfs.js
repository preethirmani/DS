const dfs =  (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    if(graph[current]) {
      for(let neighbor of graph[current]) {
        stack.push(neighbor)
      }
    }
      
  }
}

const graph = {
  a : ['b', 'c'],
  b : ['d'],
  c : ['e'],
  e : [],
  f : []
}

dfs(graph, 'a');
console.log(graph['a']);

//stack : a 
//a b c 