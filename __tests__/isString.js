import { isString } from '../src/index.js';

describe('isString', () => {
  test('Should return true for strings', () => {
    expect(isString('abc')).toEqual(true);
    expect(isString(String('abc'))).toEqual(true);
    // eslint-disable-next-line no-new-wrappers
    expect(isString(new String('abc'))).toEqual(true);
    expect(isString(Object('abc'))).toEqual(true);
  });

  test('Should return false for non-strings', () => {
    expect(isString([1, 2, 3])).toEqual(false);
    expect(isString(true)).toEqual(false);
    expect(isString(null)).toEqual(false);
    expect(isString()).toEqual(false);
    expect(isString(new Date())).toEqual(false);
    expect(isString(new Error())).toEqual(false);
    expect(isString({ foo: 'bar' })).toEqual(false);
    expect(isString(1)).toEqual(false);
    expect(isString(/x/)).toEqual(false);
  });
});
