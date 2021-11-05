import { head } from '../src';

describe('Head', () => {
  test('should return undefined', () => {
    expect(head()).toEqual(undefined);
    expect(head([])).toEqual(undefined);
  });

  test('should return the first element', () => {
    expect(head([42])).toEqual(42);
    expect(head([1, 2, 3])).toEqual(1);
  });
});
