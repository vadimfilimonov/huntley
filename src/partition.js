// @ts-check

/**
 * Splits a collection into two by callback.
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
 * // => objects for [['adam, carl'], ['ivan']]
 */
const partition = (collection, predicate) => {
  const array = Array.isArray(collection) ? collection : Object.values(collection);

  const first = array.filter((item) => predicate(item));
  const second = array.filter((item) => !predicate(item));

  return [first, second];
};

export default partition;
