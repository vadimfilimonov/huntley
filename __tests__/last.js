import { last } from '../src';

describe('Last', () => {
  test('should return undefined', () => {
    expect(last()).toEqual(undefined);
    expect(last([])).toEqual(undefined);
  });

  test('should return the last element', () => {
    expect(last([42])).toEqual(42);
    expect(last([1, 2, 3])).toEqual(3);
  });
});
