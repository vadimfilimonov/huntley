// @ts-check

/**
 * Converts all elements in `array` into a string separated by `separator`
 *
 * @param {Array} array - The array to convert.
 * @param {string} separator - The element separator.
 * @returns {string} - Returns the joined string.
 * @example
 *
 * join(['a', 'b', 'c'], '~');
 * // => a~b~c
 */
const join = (array, separator = ',') => {
  return array.join(separator);
};

export default join;
