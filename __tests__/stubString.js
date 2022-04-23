import { stubString } from '../src/index.js';

describe('StubString', () => {
  test('should return an empty string', () => {
    expect(stubString()).toEqual('');
  });
});
