import { toLower } from '../src/index.js';

describe('ToLower', () => {
  test('should convert a value to lower case', () => {
    expect(toLower('FOO')).toBe('foo');
    expect(toLower('Foo Bar')).toBe('foo bar');
    expect(toLower(123)).toBe('123');
  });

  test('should return an empty string for nullish values', () => {
    expect(toLower()).toBe('');
    expect(toLower(null)).toBe('');
    expect(toLower(undefined)).toBe('');
  });
});
