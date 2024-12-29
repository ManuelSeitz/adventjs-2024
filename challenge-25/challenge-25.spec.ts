import execute from './challenge-25';

test('execute code', () => {
  expect(execute('+++')).toBe(3);
  expect(execute('+--')).toBe(-1);
  expect(execute('>+++[-]')).toBe(0);
  expect(execute('-[++{-}]+{++++}')).toBe(5);
});
