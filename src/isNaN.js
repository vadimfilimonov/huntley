// @ts-check
import isNumber from './isNumber.js';

/**
 * Checks if `value` is `NaN`.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is a `NaN`, else `false`.
 * @example
 *
 * isNaN(NaN);
 * // => true
 *
 * isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => false
 */
const isNaN = (value) => {
  return isNumber(value) && value !== Number(value);
};

export default isNaN;
