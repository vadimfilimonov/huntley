// @ts-check

/**
 * Creates a duplicate-free version of an array.
 * @example
 * uniq([2, 1, 2]);
 * // [2, 1]
 * @param {Array} array
 * @returns {Array}
 */
const uniq = (array) => [...new Set(array)];

export default uniq;
