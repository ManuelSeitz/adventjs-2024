import compile from './challenge-10';

const instructions = [
  'MOV -1 C', // copies -1 to register 'C',
  'INC C', // increments the value of register 'C'
  'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
  'MOV C A', // copies register 'C' to register 'A',
  'INC A', // increments the value of register 'A'
];

test('compile instructions', () => {
  expect(compile(instructions)).toBe(2);
  expect(compile(['INC A', 'INC A', 'DEC A', 'MOV A B'])).toBe(1);
  expect(compile(['MOV 5 B', 'DEC B', 'MOV B A', 'INC A'])).toBe(5);
});
