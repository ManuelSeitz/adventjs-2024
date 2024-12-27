import detectBombs from './challenge-17';

test('detect bombs', () => {
  expect(
    detectBombs([
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ])
  ).toStrictEqual([
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1],
  ]);
  expect(
    detectBombs([
      [true, true],
      [false, false],
      [true, true],
    ])
  ).toStrictEqual([
    [1, 1],
    [4, 4],
    [1, 1],
  ]);
});
