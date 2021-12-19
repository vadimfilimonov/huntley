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
  const normalizedDividend = dividend || 1;
  const normalizedDivisor = divisor !== undefined ? divisor : 1;
  return normalizedDividend / normalizedDivisor;
};

export default divide;
