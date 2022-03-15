// @ts-check
import isNil from './isNil';

/**
 * Reverses `array` so that the first element becomes the last, the second element becomes the second to last, and so on.
 * **Note:** This method mutates `array` and is based on [Array#reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).
 *
 * @param {Array} array - The array to modify.
 * @returns {Array} - Returns `array`.
 * @example
 *
 * reverse([1, 2, 3]);
 * // => true
 */
const reverse = (array) => {
  if (isNil(array)) {
    return array;
  }

  array.reverse();

  return array;
};

export default reverse;
