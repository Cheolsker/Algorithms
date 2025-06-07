// 첫번째 풀이
{
  function numIslands(grid: string[][]): number {
    const rowLength = grid.length;
    const columnLength = grid[0].length;
    let count = 0;

    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < columnLength; j++) {
        if (DFS(grid, i, j)) {
          count++;
        }
      }
    }

    return count;
  }

  function DFS(grid: string[][], row: number, column: number) {
    if (grid[row][column] === "0") {
      return false;
    }

    const rowLength = grid.length;
    const columnLength = grid[0].length;
    const nx = [-1, 0, 1, 0];
    const ny = [0, 1, 0, -1];
    grid[row][column] = "0";

    for (let i = 0; i < 4; i++) {
      const nrow = row + nx[i];
      const ncolumn = column + ny[i];

      if (nrow < 0 || nrow > rowLength - 1) continue;
      if (ncolumn < 0 || ncolumn > columnLength - 1) continue;
      if (grid[nrow][ncolumn] === "0") continue;

      DFS(grid, nrow, ncolumn);
    }

    return true;
  }
}

/**
 * 두번째 풀이
 * - 코드정리
 */
{
  function DFS(grid: string[][], row: number, column: number) {
    if (
      row < 0 ||
      row > grid.length - 1 ||
      column < 0 ||
      column > grid[row].length - 1 ||
      grid[row][column] === "0"
    ) {
      return false;
    }

    grid[row][column] = "0";

    DFS(grid, row - 1, column);
    DFS(grid, row + 1, column);
    DFS(grid, row, column - 1);
    DFS(grid, row, column + 1);

    return true;
  }

  function numIslands(grid: string[][]): number {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (DFS(grid, i, j)) {
          count++;
        }
      }
    }

    return count;
  }
}
