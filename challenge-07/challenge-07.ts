function fixPackages(packages: string): string {
  let fixedWord = packages;

  while (fixedWord.includes('(') && fixedWord.includes(')')) {
    const openIndex = fixedWord.lastIndexOf('(');
    const closeIndex = fixedWord.indexOf(')', openIndex);

    if (openIndex === -1 || closeIndex === -1 || openIndex > closeIndex) break;

    const word = fixedWord.slice(openIndex + 1, closeIndex);
    const reversedWord = word.split('').reverse().join('');

    fixedWord = fixedWord.replace(`(${word})`, reversedWord);
  }

  return fixedWord;
}

export default fixPackages;
