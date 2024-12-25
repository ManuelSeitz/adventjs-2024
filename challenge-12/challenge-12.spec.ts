import calculatePrice from './challenge-12';

test('calculate xmas tree price', () => {
  expect(calculatePrice('***')).toBe(3); // (1 + 1 + 1)
  expect(calculatePrice('*o')).toBe(4); // (5 - 1)
  expect(calculatePrice('o*')).toBe(6); // (5 + 1)
  expect(calculatePrice('*o*')).toBe(5); // (-1 + 5 + 1)
  expect(calculatePrice('**o*')).toBe(6); // (1 - 1 + 5 + 1)
  expect(calculatePrice('o***')).toBe(8); // (5 + 3)
  expect(calculatePrice('*o@')).toBe(94); // (-5 - 1 + 100)
  expect(calculatePrice('*#')).toBe(49); // (-1 + 50)
  expect(calculatePrice('@@@')); // (100 + 100 + 100)
  expect(calculatePrice('#@')); // (-50 + 100)
  expect(calculatePrice('#@Z')); // undefined (Z is unknown)
});
