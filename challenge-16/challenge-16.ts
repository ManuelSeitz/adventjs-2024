function removeSnow(s: string): string {
  let i = 0;
  while (i < s.length) {
    if (s[i] === s[i + 1]) {
      s = s.replace(s[i] + s[i + 1], '');
      i = 0;
    } else {
      i++;
    }
  }

  return s;
}

export default removeSnow;
