import prepareGifts from './challenge-01';

test('sort numbers from a number array in ascending order', () => {
  expect(prepareGifts([4, 2, 3, 1])).toStrictEqual([1, 2, 3, 4]);
});

test('delete duplicates', () => {
  expect(prepareGifts([2, 2, 3, 1, 1])).toStrictEqual([1, 2, 3]);
});

test('return an empty array if no numbers provided', () => {
  expect(prepareGifts([])).toStrictEqual([]);
});
