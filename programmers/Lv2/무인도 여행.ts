function solution(maps: string[]) {
  const answer = [];
  const arr = maps.map((str) => str.split(""));
  const rows = arr.length;
  const columns = arr[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const dfs = (i: number, j: number) => {
    if (arr[i][j] === "X") {
      return 0;
    }

    let sum = 0;

    sum += Number(arr[i][j]);
    arr[i][j] = "X";

    for (let n = 0; n < 4; n++) {
      const nx = i + dx[n];
      const ny = j + dy[n];

      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < columns &&
        arr[nx][ny] !== "X"
      ) {
        sum += dfs(nx, ny);
      }
    }

    return sum;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const sum = dfs(i, j);

      if (sum > 0) {
        answer.push(sum);
      }
    }
  }

  if (answer.length > 0) {
    return answer.sort((a, b) => a - b);
  }

  return [-1];
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1,1,27]
console.log(solution(["XXX", "XXX", "XXX"])); // [-1]
