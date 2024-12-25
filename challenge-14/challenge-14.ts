function minMovesToStables(reindeer: number[], stables: number[]): number {
  let moves = 0;

  const sortedReindeer = reindeer.sort((a, b) => a - b);
  const sortedStables = stables.sort((a, b) => a - b);

  for (let i = 0; i < sortedStables.length; i++) {
    moves += Math.abs(sortedReindeer[i] - sortedStables[i]);
  }

  return moves;
}

export default minMovesToStables;
