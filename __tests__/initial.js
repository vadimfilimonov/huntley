import { initial } from '../src';

describe('Initial', () => {
  test('should work', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });
});
