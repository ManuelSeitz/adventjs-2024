function isRobotBack(moves: string): true | [number, number] {
  let [x, y] = [0, 0];
  const movesArray = moves.split('');
  const direction = {
    L: -1,
    R: 1,
    U: 1,
    D: -1,
  };

  for (let i = 0; i < movesArray.length; i++) {
    const char = movesArray[i];
    const nextChar = movesArray[i + 1];

    if (char === '*') movesArray[i] = nextChar;
    else if (char === '!') {
      movesArray[i] =
        nextChar === 'L'
          ? 'R'
          : nextChar === 'U'
          ? 'D'
          : nextChar === 'D'
          ? 'U'
          : 'L';
      movesArray.splice(i + 1, 1);
    } else if (char === '?')
      movesArray.slice(0, i).includes(nextChar)
        ? movesArray.splice(i, 2)
        : movesArray.splice(i, 1);
  }

  moves = movesArray.join('');

  for (const move of moves) {
    if (move === 'L' || move === 'R') x += direction[move];
    else if (move === 'U' || move === 'D') y += direction[move];
  }

  return x === 0 && y === 0 ? true : [x, y];
}

isRobotBack('U?D?U');

export default isRobotBack;
