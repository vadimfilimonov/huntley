// @ts-check
import isNull from './isNull.js';
import isUndefined from './isUndefined.js';

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * isNil(null);
 * // => true
 *
 * isNil(undefined);
 * // => true
 *
 * isNil(NaN);
 * // => false
 */
const isNil = (value) => {
  return isNull(value) || isUndefined(value);
};

export default isNil;
