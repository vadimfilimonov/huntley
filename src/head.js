// @ts-check

/**
 * Gets the first element of array.
 *
 * @param {Array} array
 * @returns {*}
 * @example
 *
 * head([1, 2, 3]);
 * // => 1
 */
const head = (array) => (array && array.length > 0 ? array[0] : undefined);

export default head;
