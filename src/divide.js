// @ts-check

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
  if (dividend === undefined && divisor === undefined) {
    return 1;
  }

  if (dividend === undefined) {
    return divisor;
  }

  if (divisor === undefined) {
    return dividend;
  }

  return dividend / divisor;
};

export default divide;
