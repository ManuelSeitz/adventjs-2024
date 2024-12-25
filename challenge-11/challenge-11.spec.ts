import decodeFilename from './challenge-11';

test('decode filename', () => {
  expect(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')).toBe(
    'sleighDesign.png'
  );
  expect(
    decodeFilename('2024120912345678_magic_wand-blueprint.jpg.grinchbackup')
  ).toBe('magic_wand-blueprint.jpg');
});
