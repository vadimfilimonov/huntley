// @ts-check
import isUndefined from './isUndefined.js';

/**
 * Adds two numbers.
 *
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} - Returns the total.
 * @example
 *
 * add(6, 4);
 * // => 10
 */
const add = (augend, addend) => {
  if (isUndefined(augend) && isUndefined(addend)) {
    return 0;
  }

  if (isUndefined(augend)) {
    return addend;
  }

  if (isUndefined(addend)) {
    return augend;
  }

  return augend + addend;
};

export default add;
