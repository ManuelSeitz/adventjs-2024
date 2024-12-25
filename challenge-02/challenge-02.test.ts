import createFrame from './challenge-02';

test('contain all names in a frame', () => {
  const result = '*******\n* a   *\n* bb  *\n* ccc *\n*******';
  expect(createFrame(['a', 'bb', 'ccc'])).toBe(result);
});

test('return an empty string if no names provided', () => {
  expect(createFrame([])).toBe('');
});
