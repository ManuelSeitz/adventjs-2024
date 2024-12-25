function prepareGifts(gifts: number[]): number[] {
  const cleanArray = Array.from(new Set(gifts));

  const sortedGifts = cleanArray.sort((a, b) => a - b);

  return sortedGifts;
}

export default prepareGifts;
