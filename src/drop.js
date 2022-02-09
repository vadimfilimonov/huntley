// @ts-check
import isArray from './isArray';

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3]);
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2);
 * // => [3]
 *
 * drop([1, 2, 3], 5);
 * // => []
 *
 * drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
const drop = (array, n = 1) => {
  if (!isArray(array)) {
    return [];
  }

  const normalizedN = n >= 0 ? n : 0;

  return array.slice(normalizedN);
};

export default drop;
