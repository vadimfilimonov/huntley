import isNull from './isNull.js';

/**
 * Converts `value` to a string. Nullish values return an empty string.
 *
 * TODO: Cover additional edge cases, including preserving negative zero.
 *
 * @param {*} [value=''] The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(123);
 * // => '123'
 *
 * toString(null);
 * // => ''
 */
const toString = (value = '') => {
  if (isNull(value)) {
    return '';
  }

  return String(value);
};

export default toString;
