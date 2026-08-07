import { toUpper } from '../src/index.js';

describe('ToUpper', () => {
  test('should convert a value to upper case', () => {
    expect(toUpper('foo')).toBe('FOO');
    expect(toUpper('Foo Bar')).toBe('FOO BAR');
    expect(toUpper(123)).toBe('123');
  });

  test('should return an empty string for nullish values', () => {
    expect(toUpper()).toBe('');
    expect(toUpper(null)).toBe('');
    expect(toUpper(undefined)).toBe('');
  });
});
