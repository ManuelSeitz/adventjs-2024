function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  let height = tree?.value ? 1 : 0;

  let leftSide = tree?.left;
  let rightSide = tree?.right;

  while (leftSide || rightSide) {
    height++;
    leftSide = leftSide?.left;
    rightSide = rightSide?.right;
  }

  return height;
}

export default treeHeight;
