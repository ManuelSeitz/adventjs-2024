import moveTrain from './challenge-09';

const board = ['·····', '*····', '@····', 'o····', 'o····'];

test('move train', () => {
  expect(moveTrain(board, 'U')).toBe('eat');
  expect(moveTrain(board, 'D')).toBe('crash');
  expect(moveTrain(board, 'L')).toBe('crash');
  expect(moveTrain(board, 'R')).toBe('none');
});
