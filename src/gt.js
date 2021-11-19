// @ts-check

/**
 * Checks if `value` is greater than `other`.
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns true if value is greater than other, else false.
 * @example
 *
 * gt(3, 1);
 * // => true
 *
 * gt(3, 3);
 * // => false
 *
 * gt(1, 3);
 * // => false
 */
const gt = (value, other) => {
  return value > other;
};

export default gt;
