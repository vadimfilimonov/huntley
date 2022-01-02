// @ts-check
import sum from './sum';
import size from './size';

/**
 * Computes the mean of the values in `array`.
 *
 * @param {Array} array
 * @returns {number} Returns the mean.
 * @example
 *
 * mean([4, 2, 8, 6]);
 * // => 5
 */
const mean = (array) => {
  const normalizedArray = array || [];

  return sum(normalizedArray) / size(normalizedArray);
};

export default mean;
