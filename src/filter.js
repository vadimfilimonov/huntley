/**
 * Iterates over an array, returning a new array of all elements for which `predicate` returns truthy.
 * The predicate is invoked with three arguments: (value, index, array).
 *
 * @param {Array} collection The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @example
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * filter(users, (o) => !o.active);
 * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
 */
const filter = (collection, predicate) => {
  return collection.filter((value, index, array) => predicate(value, index, array));
};

export default filter;
