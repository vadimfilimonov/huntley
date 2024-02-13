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
});
