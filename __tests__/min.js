import { min } from '../src';

describe('Min', () => {
  test('Array', () => {
    expect(min([4, 2, 8, 6])).toBe(2);
    expect(min([])).toBe(undefined);
    expect(min()).toBe(undefined);
  });
});
