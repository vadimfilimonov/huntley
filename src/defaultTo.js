import isNil from './isNil.js';

/**
 * Checks `value` to determine whether a default value should be returned in its place.
 * The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.
 *
 * @param {*} value
 * @param {*} defaultValue
 * @returns {*} Returns `value` when it is not `NaN`, `null`, or `undefined`; otherwise returns `defaultValue`.
 * @example
 *
 * defaultTo(1, 10);
 * // => 1
 *
 * defaultTo(undefined, 10);
 * // => 10
 */
const defaultTo = (value, defaultValue) => {
  return isNil(value) || Number.isNaN(value) ? defaultValue : value;
};

export default defaultTo;
