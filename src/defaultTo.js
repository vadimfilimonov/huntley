// @ts-check

/**
 * Checks `value` to determine whether a default value should be returned in its place.
 * The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.
 *
 * @param {*} value
 * @param {*} defaultValue
 * @returns {boolean}
 * @example
 *
 * defaultTo(1, 10);
 * // => 1
 *
 * defaultTo(undefined, 10);
 * // => 10
 */
const defaultTo = (value, defaultValue) => {
  return value === null || value === undefined || Number.isNaN(value) ? defaultValue : value;
};

export default defaultTo;
