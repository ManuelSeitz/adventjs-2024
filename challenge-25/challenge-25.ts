function execute(code: string): number {
  let value = 0;
  let i = 0;

  const calculate = {
    '+': () => {
      value++;
      i++;
    },
    '-': () => {
      value--;
      i++;
    },
    '>': () => {
      i++;
    },
    '{': () => {
      const end = code.indexOf('}', i);
      if (value === 0) i = end;
      else i++;
    },
    '[': () => {
      const end = code.indexOf(']', i);
      i = end;
      value = 0;
    },
  };

  while (i < code.length) {
    if (calculate[code[i] as keyof typeof calculate]) {
      calculate[code[i] as keyof typeof calculate]();
    } else {
      i++;
    }
  }

  return value;
}

execute(`+++{[-]+++[-]+}`); // nested loops

export default execute;
