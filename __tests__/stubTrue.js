import { stubTrue } from '../src';

describe('StubTrue', () => {
  test('should return true', () => {
    expect(stubTrue()).toEqual(true);
  });
});
