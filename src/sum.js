// @ts-check

/**
 * Computes the sum of the values in array.
 *
 * @param {Array} array
 * @returns {number} - The sum
 * @example
 *
 * sum([4, 2, 8, 6]);
 * // => 20
 */
const sum = (array) => array.reduce((accumulator, number) => accumulator + number, 0);

export default sum;
