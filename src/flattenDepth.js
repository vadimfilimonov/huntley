// @ts-check

/**
 * Recursively flatten `array` up to `depth` times.
 *
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * flattenDepth([1, [2, [3, [4]], 5]], 2);
 * => [1, 2, 3, [4], 5]
 */
const flattenDepth = (array, depth = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }

  if (depth <= 0) {
    return array;
  }

  return flattenDepth(array.flat(), depth - 1);
};

export default flattenDepth;
