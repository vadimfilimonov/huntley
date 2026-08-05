import isUndefined from './isUndefined.js';

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
  if (isUndefined(multiplier) && isUndefined(multiplicand)) {
    return 1;
  }

  if (isUndefined(multiplier)) {
    return multiplicand;
  }

  if (isUndefined(multiplicand)) {
    return multiplier;
  }

  return multiplier * multiplicand;
};

export default multiply;
