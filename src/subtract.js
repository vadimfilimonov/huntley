// @ts-check

/**
 * Subtract two numbers.
 *
 * @param {number} minuend
 * @param {number} subtrahend
 * @returns {number} - The difference
 * @example
 *
 * subtract(6, 4);
 * // => 2
 */
const subtract = (minuend, subtrahend) => {
  const normalizedMinuend = minuend || 0;
  const normalizedSubtrahend = subtrahend || 0;
  return normalizedMinuend - normalizedSubtrahend;
};

export default subtract;
