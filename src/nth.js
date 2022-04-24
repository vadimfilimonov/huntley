// @ts-check
import isArray from './isArray.js';
/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
 *
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} index The index of the element to return.
 * @returns {*} - Returns the nth element of `array`.
 * @example
 *
 * nth(['a', 'b', 'c', 'd'], 1);
 * // => b
 *
 * nth(['a', 'b', 'c', 'd'], -2);
 * // => c
 */
const nth = (array, index = 0) => {
  if (!isArray(array) && typeof array !== 'string') {
    return undefined;
  }

  if (typeof index !== 'number') {
    return array[0];
  }

  const normalizedIndex = index >= 0 ? index : index + array.length;
  return array[normalizedIndex];
};

export default nth;
