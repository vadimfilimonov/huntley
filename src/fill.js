/**
 * Creates a copy of `array` with elements filled with `value` from `start` up to, but not including, `end`.
 *
 * @param {Array} array The array to fill.
 * @param {any} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the filled copy of `array`.
 * @example
 *
 * fill([1, 2, 3], 'a');
 * // => ['a', 'a', 'a']
 */
const fill = (array, value, start = 0, end = array.length) => {
  const clonedArray = Array.from(array);

  for (let index = start; index < end; index += 1) {
    clonedArray[index] = value;
  }

  return clonedArray;
};

export default fill;
