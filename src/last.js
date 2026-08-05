/**
 * Gets the last element of `array`. Returns `undefined` for an empty or nullish value.
 *
 * @param {Array} array
 * @returns {*}
 * @example
 *
 * last([1, 2, 3]);
 * // => 3
 */
const last = (array) => (array && array.length > 0 ? array[array.length - 1] : undefined);

export default last;
