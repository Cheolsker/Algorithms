// DFS
{
  function dfs(
    graph: number[][],
    visited: boolean[][],
    pos: { x: number; y: number },
    limit: { n: number; m: number }
  ) {
    const { x, y } = pos;
    const { n, m } = limit;

    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }

    if (visited[x][y] || graph[x][y] === 1) {
      return false;
    }

    if (!visited[x][y]) {
      visited[x][y] = true;

      dfs(graph, visited, { x: x + 1, y }, limit);
      dfs(graph, visited, { x: x - 1, y }, limit);
      dfs(graph, visited, { x, y: y + 1 }, limit);
      dfs(graph, visited, { x, y: y - 1 }, limit);
    }

    return true;
  }

  function solution(n: number, m: number, cup: number[][]) {
    let answer = 0;
    const visited = Array.from(new Array(n), (_) => new Array(m).fill(false));

    for (let i = 0; i < cup.length; i++) {
      for (let j = 0; j < cup[i].length; j++) {
        // console.log("[x][y] : " + `${i}|${j}`);
        // console.log(visited);
        // console.log("answer : " + answer);

        if (dfs(cup, visited, { x: i, y: j }, { n, m })) {
          answer += 1;
        }
      }
    }

    return answer;
  }

  // test
  const cup = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ];

  console.log(solution(4, 5, cup));
}
