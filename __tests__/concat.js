import { concat } from '../src/index.js';

describe('concat', () => {
  test('should concat arrays', () => {
    const array = [1];
    const actual = concat(array, 2, [3], [[4]]);
    const expected = [1, 2, 3, [4]];

    expect(actual).toEqual(expected);
    expect(array).toEqual([1]);

    expect(concat(1)).toEqual([1]);
    expect(concat()).toEqual([]);
  });
});
