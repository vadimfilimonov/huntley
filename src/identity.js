// @ts-check

/**
 * This method returns the first argument it receives.
 *
 * @param {*} value
 * @returns {*}
 * @example
 *
 * identity('Run');
 * // => 'Run'
 *
 * identity((v) => v)('Run');
 * // => 'Run'
 *
 * const object = { 'a': 1 };
 * identity(object) === object;
 * // => true
 */
const identity = (value) => {
  return value;
};

export default identity;
