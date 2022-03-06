import { stubObject } from '../src';

describe('StubObject', () => {
  test('should return new empty object', () => {
    expect(stubObject()).toEqual({});
  });

  test('should not have same link', () => {
    expect(stubObject()).not.toBe(stubObject());
  });
});
