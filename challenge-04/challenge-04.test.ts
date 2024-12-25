import createXmasTree from './challenge-04';

test('create christmas tree', () => {
  const result =
    '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____';
  expect(createXmasTree(5, '*')).toBe(result);
});
