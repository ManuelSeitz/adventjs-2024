import findMissingNumbers from './challenge-23';

test('find missing numbers', () => {
  expect(findMissingNumbers([1, 2, 4, 6])).toStrictEqual([3, 5]);
  expect(findMissingNumbers([4, 8, 7, 2])).toStrictEqual([1, 3, 5, 6]);
  expect(findMissingNumbers([3, 2, 1, 1])).toStrictEqual([]);
  expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toStrictEqual([4]);
});
