function createXmasTree(height: number, ornament: string): string {
  let tree = '';

  for (let i = height - 1; i >= 0; i--) {
    tree +=
      '_'.repeat(i) +
      ornament.repeat(height * 2 - 1 - 2 * i) +
      '_'.repeat(i) +
      '\n';
  }

  const logSize = 2;

  for (let i = 1; i <= logSize; i++) {
    tree +=
      '_'.repeat(Math.floor((height * 2 - 1) / 2)) +
      '#' +
      '_'.repeat(Math.floor((height * 2 - 1) / 2));

    if (i !== logSize) tree += '\n';
  }

  return tree;
}

export default createXmasTree;
