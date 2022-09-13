// @ts-check

/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * ['6', '8', '10'].map(unary(parseInt));
 * // => [6, 8, 10]
 */
const unary = (func) => {
  return (arg) => func(arg);
};

export default unary;
