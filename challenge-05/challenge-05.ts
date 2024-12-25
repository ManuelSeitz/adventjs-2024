type Shoe = {
  type: 'I' | 'R';
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const organizedShoes: number[] = [];

  for (let i = 0; i < shoes.length; i++) {
    const currentShoe = shoes[i];
    const pairIndex = shoes.findIndex(
      (shoe, index) =>
        (currentShoe.type === 'I' ? shoe.type === 'R' : shoe.type === 'I') &&
        shoe.size === currentShoe.size &&
        index > i
    );

    if (pairIndex !== -1) {
      shoes.splice(pairIndex, 1);
      organizedShoes.push(currentShoe.size);
    }
  }

  return organizedShoes;
}

export default organizeShoes;
