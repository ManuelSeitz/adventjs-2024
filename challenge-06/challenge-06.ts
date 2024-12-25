function inBox(box: string[]): boolean {
  const giftRow = box.find((row) => row.includes('*'));

  if (!giftRow || giftRow === box[0] || giftRow === box[box.length - 1])
    return false;

  const giftIndex = giftRow.indexOf('*');

  const leftSide = giftRow.slice(0, giftIndex);
  const rightSide = giftRow.slice(giftIndex + 1);

  if (leftSide.includes('#') && rightSide.includes('#')) {
    return true;
  }

  return false;
}

export default inBox;
