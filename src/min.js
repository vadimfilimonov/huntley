// @ts-check

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey, `undefined` is returned.
 *
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * min([4, 2, 8, 6]);
 * // => 2
 *
 * min([])
 * // => undefined
 */
const min = (array) => {
  if (array && array.length > 0) {
    return Math.min(...array);
  }

  return undefined;
};

export default min;
