{
  function bfs(graph: number[][], v: number, visited: boolean[]) {
    const queue = [v];
    visited[v] = true;

    while (queue.length) {
      const v = queue.shift();
      console.log(v);

      for (const i of graph[v]) {
        if (!visited[i]) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  }

  const graph = [[], [2, 3, 4], [1, 5], [1, 6, 7], [1], [2], [3, 7], [3, 6]];
  const visited = new Array(graph.length).fill(false);

  // console.log(graph);
  // console.log(visited);

  bfs(graph, 1, visited);
}
