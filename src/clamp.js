import isUndefined from './isUndefined.js';

/**
 * Restricts `number` to the inclusive range between `lower` and `upper`.
 * If only one boundary is provided, it is treated as the upper boundary and
 * the lower boundary defaults to `0`.
 *
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower boundary.
 * @param {number} [upper] The upper boundary.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(10, 0, 5);
 * // => 5
 *
 * clamp(-2, 0, 5);
 * // => 0
 *
 * clamp(3, 5);
 * // => 3
 */
const clamp = (number, lower, upper) => {
  if (isUndefined(lower) && isUndefined(upper)) {
    return number;
  }

  if (isUndefined(upper)) {
    upper = lower;
    lower = 0;
  }

  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }

  return Math.min(Math.max(number, lower), upper);
};

export default clamp;
