import { toString } from '../src/index.js';

describe('ToString', () => {
  test('should convert values to strings', () => {
    expect(toString('hello')).toBe('hello');
    expect(toString(123)).toBe('123');
    expect(toString([null, 1])).toBe(',1');
    expect(toString(Symbol('id'))).toBe('Symbol(id)');
  });

  test('should return an empty string for nullish values', () => {
    expect(toString()).toBe('');
    expect(toString(null)).toBe('');
    expect(toString(undefined)).toBe('');
  });
});
