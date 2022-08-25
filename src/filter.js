// @ts-check

/**
 * Iterates over elements of `collection`, returning an array of all elements `predicate` returns truthy for. The predicate is invoked with three arguments: (value, index, collection).
 *
 * @param {Array} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @example
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, (o) => !o.active);
 * // => objects for ['fred']
 */
const filter = (collection, predicate) => {
  // TODO: Support objects as collection after matches, matchesProperty, matchesProperty realization
  return collection.filter((value, index, array) => predicate(value, index, array));
};

export default filter;
