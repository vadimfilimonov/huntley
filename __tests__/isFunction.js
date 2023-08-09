import { isFunction } from '../src/index.js';

describe('isFunction', () => {
  it('should return `true` for functions', () => {
    expect(isFunction(() => ({}))).toEqual(true);
  });

  it('should return `true` for async functions', () => {
    expect(isFunction(async () => ({}))).toEqual(true);
  });

  test('should return `false` for non-functions', () => {
    expect(isFunction([1, 2, 3])).toEqual(false);
    expect(isFunction(true)).toEqual(false);
    // eslint-disable-next-line prettier/prettier
    expect(isFunction(new Date)).toEqual(false);
    // eslint-disable-next-line prettier/prettier
    expect(isFunction(new Error)).toEqual(false);
    expect(isFunction({ a: 1 })).toEqual(false);
    expect(isFunction(1)).toEqual(false);
    expect(isFunction(/x/)).toEqual(false);
    expect(isFunction('a')).toEqual(false);
  });
});
