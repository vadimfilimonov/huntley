import { flatten } from '../src/index.js';

describe('flatten', () => {
  test('should flatten array', () => {
    const actual = flatten([1, [2, [3, [4]], 5]]);
    const expected = [1, 2, [3, [4]], 5];

    expect(actual).toEqual(expected);

    expect(flatten(1)).toEqual([]);
    expect(flatten()).toEqual([]);
  });
});
