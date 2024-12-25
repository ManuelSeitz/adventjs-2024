import minMovesToStables from './challenge-14';

test('move raindeer to stables', () => {
  expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toBe(3);
  expect(minMovesToStables([1, 1, 3], [1, 4, 8])).toBe(8);
  expect(minMovesToStables([5, 15, 10], [8, 18, 12])).toBe(8);
});
