import { stubString } from '../src';

describe('StubString', () => {
  test('should return an empty string', () => {
    expect(stubString()).toEqual('');
  });
});
