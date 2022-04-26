// @ts-check
import isObjectLike from './isObjectLike.js';

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is map, else `false`.
 * @example
 *
 * isMap(new Map);
 * // => true
 *
 * isMap(new WeakMap);
 * // => false
 */
const isMap = (value) => {
  const tagName = Object.prototype.toString.call(value);

  return isObjectLike(value) && tagName === '[object Map]';
};

export default isMap;
