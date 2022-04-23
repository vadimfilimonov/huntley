import { noop } from '../src/index.js';

describe('Noop', () => {
  test('should return undefined', () => {
    expect(noop()).toEqual(undefined);
  });
});
