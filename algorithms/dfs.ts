function dfs(graph: number[][], v: number, visited: boolean[]) {
  visited[v] = true;

  console.log(v, " ");

  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

const graph = [[], [2, 3, 4], [1, 5], [1, 6, 7], [1], [2], [3, 7], [3, 6]];

const visited = new Array(graph.length).fill(false);

// console.log(graph);
// console.log(visited);

dfs(graph, 1, visited);
