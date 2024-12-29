function generateGiftSets(gifts: string[]): string[][] {
  const sets: string[][] = [];

  function backtrack(start: number, combination: string[]) {
    if (combination.length > 0) sets.push([...combination]);
    for (let i = start; i < gifts.length; i++) {
      combination.push(gifts[i]);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  backtrack(0, []);

  sets.sort((a, b) => a.length - b.length);

  return sets;
}

export default generateGiftSets;
