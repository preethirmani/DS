const dfs =  (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    if(graph[source]) {
      for(let neighbor of graph[current]) {
        stack.push(neighbor)
      }
    }
      
  }
}

const recursiveDFS = (graph, source) => {
  console.log(source);
    for(let neighbor of graph[source]) {
      recursiveDFS(graph, neighbor)
    }
  
}


const graph = {
  a : ['b', 'c'],
  b : ['d'],
  c : ['e'],
  d : ['f'],
  e : [],
  f : []
}

dfs(graph, 'a');

console.log(graph['a']);
recursiveDFS(graph, 'a')

//stack : a 
//a b c 

let s = 'sis'
typeof s;