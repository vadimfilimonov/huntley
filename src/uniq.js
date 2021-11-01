// @ts-check

/**
 * Creates a duplicate-free version of an array.
 * @example
 * uniq([2, 1, 2]);
 * // [2, 1]
 * @param {Array} collection
 * @returns {Array}
 */
const uniq = (collection) => [...new Set(collection)];

export default uniq;
