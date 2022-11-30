// @ts-check

/**
 * Creates a new array concatenating `array` with any additional arrays and/or values.
 *
 * @param {Array} array The array to concatenate.
 * @param {...*} values The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * const array = [1];
 * const other = concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
const concat = (array, ...values) => {
  const concatedArray = Array.isArray(array) ? [...array] : [array];

  values.forEach((item) => {
    if (Array.isArray(item)) {
      concatedArray.push(...item);
    } else {
      concatedArray.push(item);
    }
  });

  return concatedArray;
};

export default concat;
