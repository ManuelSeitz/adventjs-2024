function createFrame(names: string[]): string {
  const sidePadding = 1;
  const frameChar = '*';

  if (names.length === 0) return '';

  // find longest name to make the frame top
  const longestNameLength = names.reduce(
    (max, name) => Math.max(max, name.length),
    0
  );

  const frameLimit =
    frameChar +
    frameChar.repeat(sidePadding) +
    frameChar.repeat(longestNameLength) +
    frameChar.repeat(sidePadding) +
    frameChar;

  // make the frame body
  const frameBody = names
    .map((name) => {
      const namePadding = ' '.repeat(longestNameLength - name.length);
      return (
        frameChar +
        ' '.repeat(sidePadding) +
        name +
        namePadding +
        ' '.repeat(sidePadding) +
        frameChar
      );
    })
    .join('\n');

  return `${frameLimit}\n${frameBody}\n${frameLimit}`;
}

export default createFrame;
