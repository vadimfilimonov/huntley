// @ts-check

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isString('abc');
 * // => true
 *
 * isString(1);
 * // => false
 */
const isString = (value) => {
  const type = typeof value;
  const tagName = Object.prototype.toString.call(value);

  return type === 'string' || tagName === '[object String]';
};

export default isString;
