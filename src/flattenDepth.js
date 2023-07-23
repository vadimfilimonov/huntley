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

  const iter = (items, currentDepth) => {
    if (currentDepth > depth) {
      return items;
    }

    return items.reduce((acc, item) => {
      if (!Array.isArray(item)) {
        return [...acc, item];
      }

      return [...acc, ...iter(item, currentDepth + 1)];
    }, []);
  };

  return iter(array, 1);
};

export default flattenDepth;
