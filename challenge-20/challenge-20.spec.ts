import fixGiftList from './challenge-20';

test('fix gift list', () => {
  expect(
    fixGiftList(
      ['puzzle', 'car', 'doll', 'car'],
      ['car', 'puzzle', 'doll', 'ball']
    )
  ).toStrictEqual({ missing: { ball: 1 }, extra: { car: 1 } });
  expect(
    fixGiftList(
      ['book', 'train', 'kite', 'train'],
      ['train', 'book', 'kite', 'ball', 'kite']
    )
  ).toStrictEqual({ missing: { ball: 1, kite: 1 }, extra: { train: 1 } });
  expect(
    fixGiftList(
      ['bear', 'bear', 'car'],
      ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
    )
  ).toStrictEqual({ missing: { puzzle: 1, car: 2 }, extra: {} });
  expect(
    fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
  ).toStrictEqual({ missing: {}, extra: {} });
});
