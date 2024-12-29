function findMissingNumbers(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  nums = Array.from(new Set(nums));
  const missingNumbers = [];

  for (let i = 1; i < nums[nums.length - 1]; i++) {
    if (!nums.includes(i)) missingNumbers.push(i);
  }

  return missingNumbers;
}

export default findMissingNumbers;
