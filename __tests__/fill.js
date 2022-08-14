import { fill } from '../src/index.js';

describe('Fill', () => {
  test('should work', () => {
    expect(fill([1, 2, 3], 'a')).toEqual(['a', 'a', 'a']);
    expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
    expect(fill([4, 6, 8, 10], '*', 1, 3)).toEqual([4, '*', '*', 10]);
  });

  test('func does not mutate array', () => {
    const actual = [1, 2, 3];

    expect(fill(actual, 'a')).toEqual(['a', 'a', 'a']);
    expect(actual).toEqual([1, 2, 3]);
  });
});
