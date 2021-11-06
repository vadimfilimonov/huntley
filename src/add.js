// @ts-check

/**
 * Adds two numbers.
 *
 * @param {number} augend
 * @param {number} addend
 * @returns {number} - The total
 * @example
 *
 * add(6, 4);
 * // => 10
 */
const add = (augend, addend) => {
  const normalizedAugend = augend || 0;
  const normalizedAddend = addend || 0;
  return normalizedAugend + normalizedAddend;
};

export default add;
