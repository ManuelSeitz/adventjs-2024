function drawTable(data: Array<Record<string, string | number>>): string {
  if (!data || data.length === 0) return '';

  const columns: (string | number)[][] = [];

  for (const item of data) {
    for (const prop in item) {
      const capitalizedName = prop.charAt(0).toUpperCase() + prop.slice(1);

      if (!columns.some((column) => column.includes(capitalizedName)))
        columns.push([capitalizedName]);

      const columnIndex = columns.findIndex((column) =>
        column.includes(capitalizedName)
      );
      columns[columnIndex].push(item[prop]);
    }
  }

  const columnTables = columns.map((column, i) => {
    let columnTable = '';
    const padding = 1;
    const columnWidth =
      Math.max(...column.map((item) => item.toString().length)) + padding * 2;

    const limit =
      '+' + '-'.repeat(columnWidth) + (i === columns.length - 1 ? '+' : '');

    columnTable += limit + '\n';

    for (const item of column) {
      columnTable +=
        '| ' +
        item +
        ' '.repeat(columnWidth - String(item).length - 1) +
        (i === columns.length - 1 ? '|' : '') +
        '\n';
      if (item === column[0]) columnTable += limit + '\n';
    }

    columnTable += limit;

    return columnTable.split('\n');
  });

  const tableHeight = columnTables[0].length;
  const rows: string[] = [];

  for (let i = 0; i < tableHeight; i++) {
    const row: string[] = [];
    for (let j = 0; j < columnTables.length; j += 2) {
      row.push(columnTables[j][i] + (columnTables[j + 1]?.[i] || ''));
    }
    rows.push(row.join(''));
  }

  return rows.join('\n');
}

export default drawTable;
