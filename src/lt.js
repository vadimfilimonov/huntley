// @ts-check

/**
 * Checks if `value` is less than `other`.
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns true if value is less than other, else false.
 * @example
 *
 * lt(1, 3);
 * // => true
 *
 * lt(3, 3);
 * // => false
 *
 * * lt(3, 1);
 * // => false
 */
const lt = (value, other) => {
  return value < other;
};

export default lt;
