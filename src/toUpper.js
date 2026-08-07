import toString from './toString.js';

/**
 * Converts `value`, as a whole, to upper case.
 *
 * @param {*} [value=''] The value to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * toUpper('foo');
 * // => 'FOO'
 *
 * toUpper(null);
 * // => ''
 */
const toUpper = (value = '') => toString(value).toUpperCase();

export default toUpper;
