import fixPackages from './challenge-07';

test('reverse words inside parentheses', () => {
  expect(fixPackages('a(cb)de')).toBe('abcde');
  expect(fixPackages('a(bc(def)g)h')).toBe('agdefcbh');
  expect(fixPackages('abc(def(gh)i)jk')).toBe('abcighfedjk');
  expect(fixPackages('a(b(c))e')).toBe('acbe');
});
