import organizeInventory from './challenge-03';

test('organize inventory', () => {
  const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' },
  ];

  const result = {
    toys: {
      doll: 5,
      car: 5,
    },
    sports: {
      ball: 2,
      racket: 4,
    },
  };

  expect(organizeInventory(inventory)).toStrictEqual(result);
});

test('return empty object if no inventory is provided', () => {
  expect(organizeInventory([])).toStrictEqual({});
});
