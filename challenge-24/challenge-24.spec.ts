import isTreesSynchronized from './challenge-24';

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
};

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
};

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' },
};

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
};

test('check if tree is synchronized', () => {
  expect(isTreesSynchronized(tree1, tree2)).toStrictEqual([true, '🎄']);
  expect(isTreesSynchronized({ value: '🎄' }, { value: '🎄' })).toStrictEqual([
    true,
    '🎄',
  ]);
  expect(isTreesSynchronized(tree1, tree3)).toStrictEqual([false, '🎄']);
  expect(isTreesSynchronized(tree1, tree4)).toStrictEqual([false, '🎄']);
});
