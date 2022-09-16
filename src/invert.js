// @ts-check

/**
 * Creates an object composed of the inverted keys and values of `object`. If `object` contains duplicate values, subsequent values overwrite property assignments of previous values.
 *
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * invert({ a: 1, b: 2, c: 1 });
 * // => { 1: 'c', 2: 'b' }
 */
const invert = (object) => {
  const invertedObject = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    invertedObject[value] = key;
  });

  return invertedObject;
};

export default invert;
