import isUndefined from './isUndefined.js';

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
  if (isUndefined(minuend) && isUndefined(subtrahend)) {
    return 0;
  }

  if (isUndefined(minuend)) {
    return subtrahend;
  }

  if (isUndefined(subtrahend)) {
    return minuend;
  }

  return minuend - subtrahend;
};

export default subtract;
