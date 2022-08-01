import { isNumber } from '../src/index.js';

describe('isNumber', () => {
  test('Should work', () => {
    expect(isNumber(3)).toEqual(true);
    expect(isNumber(Object(0))).toEqual(true);
    expect(isNumber(Number.MIN_VALUE)).toEqual(true);
    expect(isNumber(Infinity)).toEqual(true);
    expect(isNumber(NaN)).toEqual(true);

    expect(isNumber('3')).toEqual(false);
    expect(isNumber(null)).toEqual(false);
    expect(isNumber()).toEqual(false);
    expect(isNumber(undefined)).toEqual(false);
    expect(isNumber([1, 2, 3])).toEqual(false);
    expect(isNumber({ a: 1 })).toEqual(false);
    expect(isNumber(true)).toEqual(false);
    // eslint-disable-next-line prettier/prettier
    expect(isNumber(new Date)).toEqual(false);
    // eslint-disable-next-line prettier/prettier
    expect(isNumber(new Error)).toEqual(false);
    expect(isNumber(/x/)).toEqual(false);
  });
});
