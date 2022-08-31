// @ts-check
import isArray from './isArray.js';

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * takeRight([1, 2, 3]);
 * // => [3]
 *
 * takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * takeRight([1, 2, 3], 0);
 * // => []
 */
const takeRight = (array, n = 1) => {
  if (!isArray(array)) {
    return [];
  }

  if (n <= 0) {
    return [];
  }

  if (n > array.length) {
    return array.slice();
  }

  const index = array.length - n;

  return array.slice(index);
};

export default takeRight;
