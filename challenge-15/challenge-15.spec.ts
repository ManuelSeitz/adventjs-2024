import drawTable from './challenge-15';

test('draw a table', () => {
  expect(drawTable([{ name: 'Alice', city: 'London' }])).toBe(
    '+-------+--------+\n| Name  | City   |\n+-------+--------+\n| Alice | London |\n+-------+--------+'
  );
});
