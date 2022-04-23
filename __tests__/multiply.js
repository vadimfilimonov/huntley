import { multiply } from '../src/index.js';

describe('multiply', () => {
  test('Should work', () => {
    expect(multiply(6, 4)).toEqual(24);
    expect(multiply(42, 0)).toEqual(0);
  });

  test('wrong arguments', () => {
    expect(multiply(42)).toEqual(0);
    expect(multiply()).toEqual(0);
  });
});
