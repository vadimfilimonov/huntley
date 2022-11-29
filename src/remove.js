// @ts-check

/**
 * Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).
 *
 * @param {Array} array - The array to modify.
 * @param {Function} predicate - The function invoked per iteration.
 * @returns {Array} - Returns the new array of removed elements.
 * @example
 *
 * const array = [1, 2, 3, 4];
 * const evens = remove(array, (n) => n % 2 === 0);
 *
 * console.log(array);
 * // => [1, 3];
 *
 * console.log(evens);
 * // => [2, 4];
 */
const remove = (array, predicate) => {
  const filteredArray = [];
  const indexes = [];

  for (let i = 0; i < array.length; i += 1) {
    const currentItem = array[i];
    if (predicate(currentItem, i, array)) {
      filteredArray.push(currentItem);
      indexes.push(i);
    }
  }
  // TODO: Create pullAt
  for (let i = indexes.length - 1; i >= 0; i -= 1) {
    const index = indexes[i];
    array.splice(index, 1);
  }

  return filteredArray;
};

export default remove;
