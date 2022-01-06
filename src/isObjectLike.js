// @ts-check
import isNull from './isNull';

/**
 * Checks if `value` is not `null` and has a `typeof` result of "object".
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({});
 * // => true
 *
 * isObjectLike([1, 2, 3]);
 * // => true
 *
 * isObjectLike(() => {});
 * // => false
 *
 * isObjectLike(null);
 * // => false
 */
const isObjectLike = (value) => {
  return !isNull(value) && typeof value === 'object';
};

export default isObjectLike;
