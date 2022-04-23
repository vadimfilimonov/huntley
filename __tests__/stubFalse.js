import { stubFalse } from '../src/index.js';

describe('StubFalse', () => {
  test('should return false', () => {
    expect(stubFalse()).toEqual(false);
  });
});
