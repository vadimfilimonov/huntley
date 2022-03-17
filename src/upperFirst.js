// @ts-check

/**
 * Converts the first character of `string` to upper case.
 *
 * @param {string} string The string to convert.
 * @returns {string} - Returns the converted string.
 * @example
 *
 * upperFirst('fred');
 * // => 'Fred'
 *
 * upperFirst('FRED');
 * // => 'FRED'
 */
const upperFirst = (string = '') => {
  if (string.length === 0) {
    return '';
  }

  const firstChar = string.slice(0, 1);
  const capitalizedFirstChar = firstChar.toUpperCase();
  const restChars = string.slice(1);

  return `${capitalizedFirstChar}${restChars}`;
};

export default upperFirst;
