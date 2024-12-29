import getCompleted from './challenge-26';

test('get work percentage', () => {
  expect(getCompleted('01:00:00', '03:00:00')).toBe('33%');
  expect(getCompleted('02:00:00', '04:00:00')).toBe('50%');
  expect(getCompleted('01:00:00', '01:00:00')).toBe('100%');
});
