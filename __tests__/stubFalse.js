import { stubFalse } from '../src';

describe('StubFalse', () => {
  test('should return false', () => {
    expect(stubFalse()).toEqual(false);
  });
});
