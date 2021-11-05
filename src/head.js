// @ts-check

/**
 * Gets the first element of array.
 * @example
 * head([1, 2, 3]);
 * // 1
 * @param {Array} array
 * @returns {any}
 */
const head = (array) => (array && array.length > 0 ? array[0] : undefined);

export default head;
