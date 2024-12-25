import inBox from './challenge-06';

test('return true if the gift is in the box', () => {
  expect(inBox(['###', '#*#', '###'])).toBe(true);
  expect(inBox(['####', '#* #', '#  #', '####'])).toBe(true);
});

test('return false if the gift is outside the box', () => {
  expect(inBox(['#####', '#   #', '#  #*', '#####'])).toBe(false);
  expect(inBox(['#*#', '###', '###'])).toBe(false);
  expect(inBox(['####', '#  #', '##*#'])).toBe(false);
});

test('the gift is empty', () => {
  expect(inBox(['#####', '#   #', '#   #', '#   #', '#####'])).toBe(false);
});
