import generateGiftSets from './challenge-22';

test('generate gift sets', () => {
  expect(generateGiftSets(['car', 'doll', 'puzzle'])).toStrictEqual([
    ['car'],
    ['doll'],
    ['puzzle'],
    ['car', 'doll'],
    ['car', 'puzzle'],
    ['doll', 'puzzle'],
    ['car', 'doll', 'puzzle'],
  ]);
  expect(generateGiftSets(['apple', 'banana', 'cherry', 'date'])).toStrictEqual(
    [
      ['apple'],
      ['banana'],
      ['cherry'],
      ['date'],
      ['apple', 'banana'],
      ['apple', 'cherry'],
      ['apple', 'date'],
      ['banana', 'cherry'],
      ['banana', 'date'],
      ['cherry', 'date'],
      ['apple', 'banana', 'cherry'],
      ['apple', 'banana', 'date'],
      ['apple', 'cherry', 'date'],
      ['banana', 'cherry', 'date'],
      ['apple', 'banana', 'cherry', 'date'],
    ]
  );
});
