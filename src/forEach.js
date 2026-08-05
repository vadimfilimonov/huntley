import noop from './noop.js';
import isArray from './isArray.js';

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * Iteration stops if `iteratee` explicitly returns `false`.
 *
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=noop] The function invoked per iteration.
 * @returns {Array|Object} Returns collection.
 * @example
 *
 * const array = [1, 2];
 * forEach(array, (value) => console.log(value));
 * // => [1, 2]
 *
 * const object = { a: 1, b: 2 };
 * forEach(object, (value, key) => console.log(key, value));
 * // => { a: 1, b: 2 }
 */
const forEach = (collection, iteratee = noop) => {
  if (collection == null) {
    return collection;
  }

  if (isArray(collection)) {
    for (let index = 0; index < collection.length; index += 1) {
      if (iteratee(collection[index], index, collection) === false) {
        break;
      }
    }

    return collection;
  }

  Object.keys(collection).some((key) => iteratee(collection[key], key, collection) === false);

  return collection;
};

export default forEach;
