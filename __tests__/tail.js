import { tail } from '../src/index.js';

describe('Tail', () => {
  test('should return empty array', () => {
    expect(tail()).toEqual([]);
    expect(tail([])).toEqual([]);
    expect(tail([42])).toEqual([]);
  });

  test('should return the tail', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });
});
