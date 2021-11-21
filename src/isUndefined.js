// @ts-check

/**
 * Check if `value` is `undefined`
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(undefined);
 * // => true
 *
 * isUndefined(null);
 * // => false
 */
const isUndefined = (value) => {
  return value === undefined;
};

export default isUndefined;
