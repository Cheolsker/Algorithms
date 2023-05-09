// DFS
{
  function solution() {
    // dfs
    function dfs(x: number, y: number) {
      if (x < 0 || x >= ROW || y < 0 || y >= COLUMN) {
        return false;
      }

      if (CUP[x][y] === 0) {
        CUP[x][y] = 1;

        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);

        return true;
      }

      return false;
    }

    // 입력값
    const ROW = 4;
    const COLUMN = 5;
    const CUP = [
      [0, 0, 1, 1, 0],
      [0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
    ];

    let answer = 0;

    for (let i = 0; i < CUP.length; i++) {
      for (let j = 0; j < CUP[i].length; j++) {
        // console.log("[x][y] : " + `${i}|${j}`);
        // console.log(CUP);
        // console.log("answer : " + answer);

        if (dfs(i, j)) {
          answer += 1;
        }
      }
    }

    return answer;
  }

  // test
  console.log(solution());
}
