// @ts-check

/**
 * Creates a duplicate-free version of an array.
 *
 * @param {Array} array
 * @returns {Array}
 * @example
 *
 * uniq([2, 1, 2]);
 * // => [2, 1]
 */
const uniq = (array) => [...new Set(array)];

export default uniq;
