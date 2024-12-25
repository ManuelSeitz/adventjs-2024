function calculatePrice(ornaments: string): number | undefined {
  const ornamentsList = new Map([
    ['*', 1],
    ['o', 5],
    ['^', 10],
    ['#', 50],
    ['@', 100],
  ]);

  let price = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const ornament = ornaments[i];
    const nextOrnament = ornaments[i + 1];
    const ornamentPrice = ornamentsList.get(ornament);
    const nextOrnamentPrice = ornamentsList.get(nextOrnament) || 0;

    if (!ornamentsList.has(ornament) || !ornamentPrice) return;

    if (ornamentPrice < nextOrnamentPrice) price -= ornamentPrice;
    else price += ornamentPrice;
  }

  return price;
}

export default calculatePrice;
