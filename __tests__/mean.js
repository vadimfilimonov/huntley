import { mean } from '../src';

describe('Mean', () => {
  test('Should work', () => {
    expect(mean([4, 2, 8, 6])).toBe(5);
  });

  test('Wrong arguments', () => {
    expect(mean([0])).toBe(0);
    expect(mean([])).toBe(NaN);
    expect(mean()).toBe(NaN);
  });
});
