function dfs(graph: number[][], v: number, visited: boolean[]) {
  if (!visited[v]) {
    visited[v] = true;

    for (let i = 0; i < graph[v].length; i++) {
      if (graph[v][i] === 1) {
        dfs(graph, i, visited);
      }
    }
    return true;
  }

  return false;
}

function solution(n: number, computers: number[][]) {
  let answer = 0;
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (dfs(computers, i, visited)) {
      answer += 1;
    }
  }

  return answer;
}

// 테스트 케이스 (n, computer)
// 3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	-> answer : 2
// 3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]] -> answer : 1

// 테스트 1
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

// 테스트 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
