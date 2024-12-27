function detectBombs(grid: boolean[][]): number[][] {
  const result: number[][] = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0)
  );

  const adjacentDirections = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 1],
    [1, 0],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        for (const [dx, dy] of adjacentDirections) {
          const row = i + dx;
          const col = j + dy;
          if (row >= 0 && row < grid.length && col >= 0 && col < grid[i].length)
            result[row][col]++;
        }
      }
    }
  }

  return result;
}

export default detectBombs;
