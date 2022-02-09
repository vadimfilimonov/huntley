import { drop } from '../src';

describe('Drop', () => {
  test('should work', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('wrong arguments', () => {
    expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3]);
    expect(drop(null, 2)).toEqual([]);
  });
});
