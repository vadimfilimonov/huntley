import { take } from '../src/index.js';

describe('take', () => {
  test('should work', () => {
    expect(take([1, 2, 3])).toEqual([1]);
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
    expect(take([1, 2, 3], 0)).toEqual([]);
  });

  test('wrong arguments', () => {
    expect(take([1, 2, 3], -1)).toEqual([]);
    expect(take(null, 2)).toEqual([]);
  });
});
