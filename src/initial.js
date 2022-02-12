// @ts-check
import dropRight from './dropRight';

/**
 * Gets all but the last element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * initial([1, 2, 3]);
 * // => [1, 2]
 */
const initial = (array) => {
  return dropRight(array);
};

export default initial;
