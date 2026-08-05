import isUndefined from './isUndefined.js';

/**
 * Divides two numbers. Missing arguments are treated as identity values.
 *
 * @param {number} [dividend] The number to divide.
 * @param {number} [divisor] The number to divide by.
 * @returns {number} Returns the quotient.
 * @example
 *
 * divide(6, 4);
 * // => 1.5
 *
 * divide(6);
 * // => 6
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
