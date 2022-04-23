import { max } from '../src/index.js';

describe('Max', () => {
  test('Array', () => {
    expect(max([4, 2, 8, 6])).toBe(8);
    expect(max([])).toBe(undefined);
    expect(max()).toBe(undefined);
  });
});
