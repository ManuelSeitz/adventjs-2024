import organizeShoes from './challenge-05';

type Shoe = {
  type: 'I' | 'R';
  size: number;
};

test('organize different shoe sizes', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 },
  ];

  expect(organizeShoes(shoes)).toStrictEqual([38, 42]);
});

test('organize pairs with the same size', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
  ];

  expect(organizeShoes(shoes)).toStrictEqual([38, 38]);
});

test('return an empty array if there are no matches', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 },
  ];

  expect(organizeShoes(shoes)).toStrictEqual([]);
});
