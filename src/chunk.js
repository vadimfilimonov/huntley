// @ts-check

/**
 * Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @template T
 * @param {T[]} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {T[][]} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
const chunk = (array, size = 1) => {
  let numericSize;

  try {
    numericSize = Number(size);
  } catch {
    numericSize = 0;
  }

  const normalizedSize = Number.isNaN(numericSize) ? 0 : Math.trunc(numericSize);
  const length = array == null ? 0 : array.length;

  if (!length || normalizedSize < 1) {
    return [];
  }

  const result = [];

  for (let i = 0; i < length; i += normalizedSize) {
    const chunkItem = Array.prototype.slice.call(array, i, i + normalizedSize);
    result.push(chunkItem);
  }

  return result;
};

export default chunk;
