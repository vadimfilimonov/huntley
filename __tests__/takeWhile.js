import { takeWhile } from '../src/index.js';

describe('takeWhile', () => {
  test('should work', () => {
    expect(takeWhile([1, 2, 3])).toEqual([1, 2, 3]);
    expect(takeWhile([1, 2, 3], (n) => n < 3)).toEqual([1, 2]);
    expect(takeWhile([2, 4, 5, 6, 8], (n) => n % 2 === 0)).toEqual([2, 4]);
  });

  test('wrong arguments', () => {
    expect(takeWhile([])).toEqual([]);
    expect(takeWhile([1, 2, 3], {})).toEqual([1, 2, 3]);
  });

  test('empty arguments', () => {
    expect(takeWhile([])).toEqual([]);
  });
});
