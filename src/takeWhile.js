import isFunction from './isFunction.js';
import stubTrue from './stubTrue.js';

/**
 * Creates a slice of `array` with elements taken from the beginning while `predicate` returns truthy.
 *
 * @param {Array} array The array to query.
 * @param {Function} [predicate=stubTrue] The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * takeWhile([1, 2, 3, 4], (value) => value < 3);
 * // => [1, 2]
 */
const takeWhile = (array, predicate) => {
  // TODO: Support matches, matchesProperty and property
  const processedPredicate = isFunction(predicate) ? predicate : stubTrue;

  const takedItems = [];

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];

    // TODO: Pass the index and the whole array to predicate, as the callback
    // contract requires: predicate(value, index, array).
    if (!processedPredicate(item)) {
      return takedItems;
    }

    takedItems.push(item);
  }

  return takedItems;
};

export default takeWhile;
