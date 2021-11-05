import { noop } from '../src';

describe('Noop', () => {
  test('should return undefined', () => {
    expect(noop()).toEqual(undefined);
  });
});
