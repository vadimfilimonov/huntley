// @ts-check

import noop from './noop.js';

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 *
 * @param {Array} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {*} Returns collection.
 * @example
 *
 * forEach([1, 2]);
 * // => 1
 */
const forEach = (collection, iteratee = noop) => {
  // TODO: support objects in collection
  collection.forEach((value, index, array) => {
    iteratee(value, index, array);
  });

  return collection;
};

export default forEach;
