// @ts-check

/**
 * Gets the last element of array.
 * @example
 * last([1, 2, 3]);
 * // 3
 * @param {Array} array
 * @returns {any}
 */
const last = (array) => (array.length > 0 ? array[array.length - 1] : undefined);

export default last;
