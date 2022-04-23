import { stubTrue } from '../src/index.js';

describe('StubTrue', () => {
  test('should return true', () => {
    expect(stubTrue()).toEqual(true);
  });
});
