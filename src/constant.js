// @ts-check

/**
 * Creates a function that returns `value`.
 *
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * const func = constant({ a: 1 });
 * func();
 * // => { a: 1 }
 */
const constant = (value) => {
  return () => value;
};

export default constant;
