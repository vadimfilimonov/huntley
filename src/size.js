// @ts-check

/**
 * Gets the size of collection.
 *
 * @param {Array|Object|string} collection
 * @returns {number}
 * @example
 *
 * size([1, 2, 3]);
 * // => 3
 *
 * size({ foo: 'bar', baz: false });
 * // => 2
 *
 * size('cobbles');
 * // => 7
 */
const size = (collection) => {
  if (typeof collection === 'string') {
    return collection.length;
  }

  if (Array.isArray(collection)) {
    return collection.length;
  }

  if (typeof collection === 'object' && collection !== null) {
    const keys = Object.keys(collection);
    return keys.length;
  }

  return 0;
};

export default size;
