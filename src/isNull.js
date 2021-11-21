// @ts-check

/**
 * Check if `value` is `null`
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(undefined);
 * // => false
 */
const isNull = (value) => {
  return value === null;
};

export default isNull;
