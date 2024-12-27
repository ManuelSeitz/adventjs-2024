import distributeWeight from './challenge-19';

test('distribute weight', () => {
  expect(distributeWeight(1)).toBe(' _ \n|_|');
  expect(distributeWeight(2)).toBe(' ___ \n|___|');
  expect(distributeWeight(3)).toBe(' _ \n|_|_\n|___|');
});
