function compile(instructions: string[]): number {
  const map = new Map();
  let i = 0;

  while (i < instructions.length) {
    const [command, param1, param2] = instructions[i].split(' ');

    if (command === 'MOV') {
      map.set(param2, isNaN(+param1) ? map.get(param1) || 0 : +param1);
    } else if (command === 'INC') {
      map.set(param1, (map.get(param1) || 0) + 1);
    } else if (command === 'JMP' && (map.get(param1) || 0) === 0) {
      i = +param2;
      continue;
    } else if (command === 'DEC') {
      map.set(param1, (map.get(param1) || 0) - 1);
    }

    i++;
  }

  for (let i = 0; i < instructions.length; i++) {}

  return map.get('A');
}

export default compile;
