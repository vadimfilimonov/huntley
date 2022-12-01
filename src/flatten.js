// @ts-check

/**
 * Flattens `array` a single level deep
 *
 * @param {Array} array The array to flatten
 * @returns {Array} Returns the new flattened array
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);
 * => [1, 2, [3, [4]], 5]
 */
const flatten = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.flat();
};

export default flatten;
