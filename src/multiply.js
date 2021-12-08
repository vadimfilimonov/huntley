// @ts-check

/**
 * Multiply two numbers.
 *
 * @param {number} multiplier
 * @param {number} multiplicand
 * @returns {number} - Returns the product
 * @example
 *
 * multiply(6, 4);
 * // => 24
 */
const multiply = (multiplier, multiplicand) => {
  const normalizedMultiplier = multiplier || 0;
  const normalizedMultiplicand = multiplicand || 0;
  return normalizedMultiplier * normalizedMultiplicand;
};

export default multiply;
