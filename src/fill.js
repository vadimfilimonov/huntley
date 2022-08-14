// @ts-check

/**
 * Fills elements of `array` with `value` from `start` up to, but not including, `end`.
 *
 * @param {Array} array The array to fill.
 * @param {any} value The value to fill `array` with.
 * @param {number} start The start position.
 * @param {number} end The end position.
 * @returns {Array} - Returns `array`.
 * @example
 */
const fill = (array, value, start = 0, end = array.length) => {
  const clonedArray = Array.from(array);

  for (let index = start; index < end; index += 1) {
    clonedArray[index] = value;
  }

  return clonedArray;
};

export default fill;
