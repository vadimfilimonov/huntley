// @ts-check
import isArray from './isArray.js';

/**
 * Creates a `slice` of array with `n` elements taken from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * take([1, 2, 3]);
 * // => [1]
 *
 * take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0);
 * // => []
 */
const take = (array, n = 1) => {
  if (!isArray(array)) {
    return [];
  }

  if (n <= 0) {
    return [];
  }

  return array.slice(0, n);
};

export default take;
