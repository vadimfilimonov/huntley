import { forEach } from '../src/index.js';

describe('ForEach', () => {
  test('should fill new array and return initial', () => {
    const input = [1, 2, 3];

    const actual = [];
    const returnedValue = forEach(input, (value, index, array) => {
      // eslint-disable-next-line operator-assignment, no-param-reassign
      array[index] = array[index] * 3;
      // eslint-disable-next-line operator-assignment, no-param-reassign
      value = value * 2;
      actual.push(value);
    });

    expect(actual).toEqual([2, 4, 6]);
    expect(returnedValue).toEqual([3, 6, 9]);
  });

  test('should iterate over object values and keys', () => {
    const input = { a: 1, b: 2 };
    const actual = [];

    const returnedValue = forEach(input, (value, key, object) => {
      actual.push([key, value, object]);
    });

    expect(actual).toEqual([
      ['a', 1, input],
      ['b', 2, input],
    ]);
    expect(returnedValue).toBe(input);
  });

  test('should return nullish collections without throwing', () => {
    expect(forEach(null)).toBeNull();
    expect(forEach(undefined)).toBeUndefined();
  });

  test('should stop iteration when iteratee returns false', () => {
    const actual = [];

    forEach([1, 2, 3], (value) => {
      actual.push(value);

      if (value === 2) {
        return false;
      }

      return undefined;
    });

    expect(actual).toEqual([1, 2]);
  });

  test('should stop object iteration when iteratee returns false', () => {
    const actual = [];

    forEach({ a: 1, b: 2, c: 3 }, (value, key) => {
      actual.push([key, value]);

      if (key === 'b') {
        return false;
      }

      return undefined;
    });

    expect(actual).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
