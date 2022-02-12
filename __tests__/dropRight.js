import { dropRight } from '../src';

describe('DropRight', () => {
  test('should work', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(dropRight([])).toEqual([]);
  });

  test('wrong arguments', () => {
    expect(dropRight([1, 2, 3], -1)).toEqual([1, 2, 3]);
    expect(dropRight(null, 2)).toEqual([]);
  });
});
