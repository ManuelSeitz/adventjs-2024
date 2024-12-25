import isRobotBack from './challenge-13';

test('is robot back', () => {
  expect(isRobotBack('R')).toStrictEqual([1, 0]);
  expect(isRobotBack('RL')).toBe(true);
  expect(isRobotBack('RLUD')).toBe(true);
  expect(isRobotBack('*RU')).toStrictEqual([2, 1]); // [2, 1]
  expect(isRobotBack('R*U')).toStrictEqual([1, 2]); // [1, 2]
  expect(isRobotBack('LLL!R')).toStrictEqual([-4, 0]); // [-4, 0]
  expect(isRobotBack('R?R')).toStrictEqual([1, 0]); // [1, 0]
  expect(isRobotBack('U?D')).toBe(true);
  expect(isRobotBack('R!L')).toStrictEqual([2, 0]); // [2,0]
  expect(isRobotBack('U!D')).toStrictEqual([0, 2]); // [0,2]
  expect(isRobotBack('R?L')).toBe(true);
  expect(isRobotBack('U?U')).toStrictEqual([0, 1]); // [0,1]
  expect(isRobotBack('*U?U')).toStrictEqual([0, 2]); // [0,2]
  expect(isRobotBack('U?D?U')).toBe(true);
});
