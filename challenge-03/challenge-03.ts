type Item = { name: string; quantity: number; category: string };

type Inventory = Item[];

interface Result {
  [category: string]: { [name: string]: number };
}

function organizeInventory(inventory: Inventory) {
  const result: Result = {};

  inventory.forEach((item) => {
    const { name, quantity, category } = item;

    if (!result[category]) {
      result[category] = {};
    }

    if (result[category][name]) {
      result[category][name] += quantity;
    } else {
      result[category][name] = quantity;
    }
  });

  return result;
}

export default organizeInventory;
