import toString from './toString.js';

/**
 * Converts `value`, as a whole, to lower case.
 *
 * @param {*} [value=''] The value to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * toLower('FOO');
 * // => 'foo'
 *
 * toLower(null);
 * // => ''
 */
const toLower = (value = '') => toString(value).toLowerCase();

export default toLower;
