// @ts-check

/**
 * Gets the last element of array.
 * @example
 * last([1, 2, 3]);
 * // 3
 * @param {Array} collection
 * @returns {any}
 */
const last = (collection) => (collection.length > 0 ? collection[collection.length - 1] : undefined);

export default last;
