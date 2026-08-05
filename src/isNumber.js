/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * isNumber(Number(3));
 * // => true
 *
 * isNumber('3');
 * // => false
 */
const isNumber = (value) => {
  const type = typeof value;
  const tagName = Object.prototype.toString.call(value);

  return type === 'number' || tagName === '[object Number]';
};

export default isNumber;
