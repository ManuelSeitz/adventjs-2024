function distributeWeight(weight: number): string {
  const boxRepresentations = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };

  const boxNums = [];
  for (const prop in boxRepresentations) boxNums.push(+prop);

  let sum = 0;
  let i = boxNums.length - 1;
  const usedBoxes: number[] = [];

  while (sum < weight) {
    if (sum + boxNums[i] <= weight) {
      sum += boxNums[i];
      usedBoxes.push(boxNums[i]);
    } else {
      i--;
    }
  }

  usedBoxes.sort((a, b) => a - b);

  let result = '';
  for (let i = 0; i < usedBoxes.length; i = i + 2) {
    const selectedBox = [
      ...boxRepresentations[usedBoxes[i] as keyof typeof boxRepresentations],
    ];

    if (usedBoxes.length === 1) {
      result += selectedBox.join('\n');
      break;
    }

    const selectedBoxBase = selectedBox.splice(selectedBox.length - 1, 1)[0];
    const boxWidth = selectedBoxBase.length;

    const nextBox = usedBoxes[i + 1]
      ? [
          ...boxRepresentations[
            usedBoxes[i + 1] as keyof typeof boxRepresentations
          ],
        ]
      : [];

    const nextBoxTop = nextBox.splice(0, 1)[0];

    if (i > 0) {
      const prevBox = [
        ...boxRepresentations[
          usedBoxes[i - 1] as keyof typeof boxRepresentations
        ],
      ];
      selectedBox[0] = selectedBox[0]
        .trim()
        .slice(prevBox[prevBox.length - 1].length - 1);
    }

    result += [
      ...selectedBox,
      selectedBoxBase + (nextBoxTop ? nextBoxTop.slice(boxWidth).trim() : ''),
      ...nextBox,
    ].join('\n');
  }

  return result;
}

export default distributeWeight;
