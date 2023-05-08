{
  function bfs_shortest_path(
    graph: number[][],
    v: number,
    visited,
    pathLengths: number[]
  ) {
    const queue = [v];
    visited[v] = true;

    while (queue.length) {
      const v = queue.shift();
      // console.log(v);

      for (const i of graph[v]) {
        if (!visited[i]) {
          queue.push(i);
          visited[i] = true;
          pathLengths[i] = pathLengths[v] + 1;
        }
      }
    }
  }

  const graph = [[], [2, 3, 4], [1, 5], [1, 6, 7], [1], [2], [3, 7], [3, 6]];
  const visited = new Array(graph.length).fill(false);
  const pathLengths = new Array(graph.length).fill(0);

  // console.log(graph);
  // console.log(visited);

  bfs_shortest_path(graph, 4, visited, pathLengths);

  console.log(pathLengths);
}
