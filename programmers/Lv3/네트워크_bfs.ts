function bfs(graph: number[][], v: number, visited: boolean[]) {
  if (visited[v]) {
    return false;
  }

  const queue = [v];

  while (queue.length) {
    const n = queue.shift() || 0;

    for (let i = 0; i < graph[n].length; i++) {
      if (graph[n][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }

  return true;
}

function solution(n: number, computers: number[][]) {
  let answer = 0;
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (bfs(computers, i, visited)) {
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
