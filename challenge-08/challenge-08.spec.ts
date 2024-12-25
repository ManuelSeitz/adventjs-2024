import drawRace from './challenge-08';

test('draw race', () => {
  expect(drawRace([0, 5, -3], 10)).toBe(
    '  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3'
  );
  expect(drawRace([2, -1, 0, 5], 8)).toBe(
    '   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4'
  );
});
