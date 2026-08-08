import isArray from './isArray.js';

/**
 * Splits a collection into two groups by `predicate`. Objects are processed through their enumerable values.
 *
 * @param {Array|object} collection - The collection to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @returns {Array} - Returns the array of grouped elements.
 * @example
 *
 * const users = [
 *   { 'name': 'ivan', 'age': 18 },
 *   { 'name': 'adam', 'age': 25 },
 *   { 'name': 'carl', 'age': 39 }
 * ];
 *
 * partition(users, user => user.age >= 21);
 * // => [['adam', 'carl'], ['ivan']]
 */
const partition = (collection, predicate) => {
  const array = isArray(collection) ? collection : Object.values(collection);
  const first = [];
  const second = [];

  for (const item of array) {
    if (predicate(item)) {
      first.push(item);
    } else {
      second.push(item);
    }
  }

  return [first, second];
};

export default partition;
