import isUndefined from './isUndefined.js';

/**
 * Divide two numbers.
 *
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number} - Returns the quotient
 * @example
 *
 * divide(6, 4);
 * // => 1.5
 */
const divide = (dividend, divisor) => {
  if (isUndefined(dividend) && isUndefined(divisor)) {
    return 1;
  }

  if (isUndefined(dividend)) {
    return divisor;
  }

  if (isUndefined(divisor)) {
    return dividend;
  }

  return dividend / divisor;
};

export default divide;
