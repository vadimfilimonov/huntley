import { stubArray } from '../src';

describe('StubArray', () => {
  test('should return new empty array', () => {
    expect(stubArray()).toEqual([]);
  });

  test('should not have same link', () => {
    expect(stubArray()).not.toBe(stubArray());
  });
});
