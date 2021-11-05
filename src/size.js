// @ts-check

/**
 * Gets the size of collection.
 * @example
 * size([1, 2, 3]);
 * // 3
 * @param {Array|Object|string} collection
 * @returns {number}
 */
const size = (collection) => {
  if (typeof collection === 'string') {
    return collection.length;
  }

  if (Array.isArray(collection)) {
    return collection.length;
  }

  if (typeof collection === 'object') {
    const keys = Object.keys(collection);
    return keys.length;
  }

  return 0;
};

export default size;
