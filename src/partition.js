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
  const array = Array.isArray(collection) ? collection : Object.values(collection);

  // TODO: Evaluate predicate once per item and split the result in one pass.
  // The current implementation invokes predicate twice for every item.
  const first = array.filter((item) => predicate(item));
  const second = array.filter((item) => !predicate(item));

  return [first, second];
};

export default partition;
