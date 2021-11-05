import { size } from '../src';

describe('Size', () => {
  test('Array', () => {
    expect(size([])).toBe(0);
    expect(size([1, 2, 3])).toBe(3);
  });

  test('Object', () => {
    expect(size({})).toBe(0);
    expect(size({ foo: 'bar', baz: false })).toBe(2);
  });

  test('String', () => {
    expect(size('')).toBe(0);
    expect(size('cobbles')).toBe(7);
  });

  test('Wrong type', () => {
    expect(size()).toBe(0);
    expect(size(null)).toBe(0);
    expect(size(true)).toBe(0);
    expect(size(42)).toBe(0);
  });
});
