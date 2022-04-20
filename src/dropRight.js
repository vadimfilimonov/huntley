// @ts-check
import isArray from './isArray.js';
import size from './size.js';

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * dropRight([1, 2, 3], 5);
 * // => []
 *
 * dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
const dropRight = (array, n = 1) => {
  if (!isArray(array)) {
    return [];
  }

  const normalizedN = n >= 0 ? n : 0;
  const end = Math.max(0, size(array) - normalizedN);

  return array.slice(0, end);
};

export default dropRight;
