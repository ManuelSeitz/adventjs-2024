function drawRace(indices: number[], length: number): string {
  return indices
    .map((pos, i) => {
      const spaces = ' '.repeat(indices.length - i - 1);
      let raceTrack = '';

      if (pos === 0) raceTrack += '~'.repeat(length);
      else if (pos > 0)
        raceTrack += '~'.repeat(pos) + 'r' + '~'.repeat(length - pos - 1);
      else
        raceTrack +=
          '~'.repeat(length - Math.abs(pos)) +
          'r' +
          '~'.repeat(Math.abs(pos) - 1);

      return `${spaces}${raceTrack} /${i + 1}`;
    })
    .join('\n');
}

export default drawRace;
