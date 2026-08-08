/**
 * Computes the maximum value of `array`. If `array` is empty or falsey, `undefined` is returned.
 *
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * max([4, 2, 8, 6]);
 * // => 8
 *
 * max([])
 * // => undefined
 */
const max = (array) => {
  if (!array || array.length === 0) {
    return undefined;
  }

  let result = -Infinity;

  for (const value of array) {
    result = Math.max(result, value);
  }

  return result;
};

export default max;
