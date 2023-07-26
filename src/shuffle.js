// @ts-check
import isArray from './isArray.js';
import isObjectLike from './isObjectLike.js';

/**
 * Creates an array of shuffled values, using a version of the `Fisher-Yates shuffle`.
 *
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
const shuffle = (collection) => {
  if (!isObjectLike(collection)) {
    return [];
  }

  const shuffledCollection = isArray(collection) ? [...collection] : Object.values(collection);

  for (let index = shuffledCollection.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffledCollection[index], shuffledCollection[randomIndex]] = [
      shuffledCollection[randomIndex],
      shuffledCollection[index],
    ];
  }

  return shuffledCollection;
};

export default shuffle;
