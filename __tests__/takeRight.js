import { takeRight } from '../src/index.js';

describe('takeRight', () => {
  test('should work', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });

  test('wrong arguments', () => {
    expect(takeRight([1, 2, 3], -1)).toEqual([]);
    expect(takeRight(null, 2)).toEqual([]);
  });
});
