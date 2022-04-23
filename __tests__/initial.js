import { initial } from '../src/index.js';

describe('Initial', () => {
  test('should work', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });
});
