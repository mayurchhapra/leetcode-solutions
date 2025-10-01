function exist(board: string[][], word: string): boolean {

  const rows = board.length;
  const cols = board[0].length;

  const dfs = (row:number, col:number, index:number) => {

      if (word.length === index) return true;

      if (
          row < 0 || row >= rows ||
          col < 0 || col >= cols ||
          board[row][col] !== word[index]
      )
      return false

      const tmp = board[row][col];

      board[row][col] = '';

      const found = (
          dfs(row + 1, col, index + 1) ||
          dfs(row - 1, col, index + 1) ||
          dfs(row, col + 1, index + 1) ||
          dfs(row, col - 1, index + 1)
      )

      board[row][col] = tmp
      return found;
  }

  for (let r=0;r<rows; r++) {
      for (let c=0;c<cols; c++) {
          if (dfs(r, c, 0))
              return true
      }
  }

  // Default
  return false;
};