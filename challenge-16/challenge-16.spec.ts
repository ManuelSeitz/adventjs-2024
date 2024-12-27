import removeSnow from './challenge-16';

test('remove duplicated adjacent characters', () => {
  expect(removeSnow('zxxzoz')).toBe('oz');
  expect(removeSnow('abcdd')).toBe('abc');
  expect(removeSnow('zzz')).toBe('z');
  expect(removeSnow('a')).toBe('a');
});
