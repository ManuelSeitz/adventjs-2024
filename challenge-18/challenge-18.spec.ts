import findInAgenda from './challenge-18';

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

test('find in agenda by phone', () => {
  expect(findInAgenda(agenda, '34-600-123-456')).toStrictEqual({
    name: 'Juan Perez',
    address: 'Calle Gran Via 12',
  });
  expect(findInAgenda(agenda, '600-987')).toStrictEqual({
    name: 'Maria Gomez',
    address: 'Plaza Mayor 45 Madrid 28013',
  });
  expect(findInAgenda(agenda, '111')).toBe(null);
});
