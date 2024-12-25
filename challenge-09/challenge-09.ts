type Board = string[];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

function moveTrain(board: Board, mov: Movement): Result {
  const headPos: { posY: number | null; posX: number | null } = {
    posY: null,
    posX: null,
  };

  for (let y = 0; y < board.length; y++) {
    const column = board[y];
    if (column.includes('@')) {
      headPos.posY = y;
      headPos.posX = column.indexOf('@');
    }
  }

  if (headPos.posY === null || headPos.posX === null) return 'none';

  let nextItem = null;
  if (mov === 'U') nextItem = board[headPos.posY - 1]?.[headPos.posX];
  else if (mov === 'D') nextItem = board[headPos.posY + 1]?.[headPos.posX];
  else if (mov === 'L') nextItem = board[headPos.posY]?.[headPos.posX - 1];
  else nextItem = board[headPos.posY]?.[headPos.posX + 1];

  if (nextItem === '*') return 'eat';
  else if (nextItem === '·') return 'none';
  return 'crash';
}

export default moveTrain;
