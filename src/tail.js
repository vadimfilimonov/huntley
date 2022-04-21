// @ts-check
import isArray from './isArray.js';

/**
 * Gets all but the first element of `array`.
 *
 * @param {Array} array The array to query
 * @returns {Array} Returns the slice of `array`.

 * @example
 *
 * tail([1, 2, 3]);
 * // => [2, 3]
 */
const tail = (array) => {
  if (!isArray(array)) {
    return [];
  }

  const [, ...rest] = array;

  return rest;
};

export default tail;
