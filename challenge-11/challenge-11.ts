function decodeFilename(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  const underscoreIndex = filename.indexOf('_');
  return filename.slice(underscoreIndex + 1, lastDotIndex);
}

export default decodeFilename;
