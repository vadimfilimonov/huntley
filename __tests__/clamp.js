import { clamp } from '../src/index.js';

describe('Clamp', () => {
  test('should clamp values to the range', () => {
    expect(clamp(3, 0, 5)).toBe(3);
    expect(clamp(-2, 0, 5)).toBe(0);
    expect(clamp(10, 0, 5)).toBe(5);
  });

  test('should support a single upper boundary', () => {
    expect(clamp(-2, 5)).toBe(0);
    expect(clamp(3, 5)).toBe(3);
    expect(clamp(10, 5)).toBe(5);
  });

  test('should support reversed boundaries', () => {
    expect(clamp(3, 5, 0)).toBe(3);
    expect(clamp(-2, 5, 0)).toBe(0);
    expect(clamp(10, 5, 0)).toBe(5);
  });

  test('should return the number when no boundaries are provided', () => {
    expect(clamp(3)).toBe(3);
  });
});
