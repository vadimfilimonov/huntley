import { flattenDepth } from '../src/index.js';

describe('flattenDepth', () => {
  test('should flattenDepth array', () => {
    expect(flattenDepth([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth([1, [2, [3, [4]], 5]], 1)).toEqual([1, 2, [3, [4]], 5]);
    expect(flattenDepth([1, [2, [3, [4]], 5]], 2)).toEqual([1, 2, 3, [4], 5]);
    expect(flattenDepth([1, [2, [3, [4]], 5]], 10)).toEqual([1, 2, 3, 4, 5]);

    expect(flattenDepth([1, [2, [3, [4]], 5]], -1)).toEqual([1, [2, [3, [4]], 5]]);
    expect(flattenDepth(1)).toEqual([]);
    expect(flattenDepth()).toEqual([]);
  });
});
