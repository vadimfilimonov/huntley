// @ts-check

/**
 * Gets the first element of array.
 * @example
 * head([1, 2, 3]);
 * // 1
 * @param {Array} collection
 * @returns {any}
 */
const head = (collection) => (collection.length > 0 ? collection[0] : undefined);

export default head;
