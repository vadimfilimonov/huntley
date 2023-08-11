// @ts-check
import isFunction from './isFunction.js';
import stubTrue from './stubTrue.js';

/**
 * Creates a `slice` of array with `n` elements taken from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 */
const takeWhile = (array, predicate) => {
  // TODO: Support matches, matchesProperty and property
  const processedPredicate = isFunction(predicate) ? predicate : stubTrue;

  const takedItems = [];

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];

    if (!processedPredicate(item)) {
      return takedItems;
    }

    takedItems.push(item);
  }

  return takedItems;
};

export default takeWhile;
