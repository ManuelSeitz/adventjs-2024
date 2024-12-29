import treeHeight from './challenge-21';

test('calculate tree height', () => {
  expect(
    treeHeight({
      value: '🎁',
      left: null,
      right: null,
    })
  ).toBe(1);
  expect(
    treeHeight({
      value: '🎁',
      left: {
        value: '🎄',
        left: null,
        right: null,
      },
      right: {
        value: '❄️',
        left: null,
        right: null,
      },
    })
  ).toBe(2);
  expect(
    treeHeight({
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: '❄️',
        left: null,
        right: null,
      },
    })
  ).toBe(3);
  expect(treeHeight(null)).toBe(0);
  expect(
    treeHeight({
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: {
            value: '🎅',
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: null,
    })
  ).toBe(4);
});
