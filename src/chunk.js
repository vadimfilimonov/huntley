// @ts-check
import isArray from './isArray.js';

/**
 * Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {number} size The length of each chunk.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
const chunk = (array, size = 1) => {
  if (!isArray(array) || size <= 0) {
    return [];
  }

  const normalizedSize = Math.floor(size);

  const result = [];

  for (let i = 0; i < array.length; i += normalizedSize) {
    const chunkItem = array.slice(i, i + normalizedSize);
    result.push(chunkItem);
  }

  return result;
};

export default chunk;
