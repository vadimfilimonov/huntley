import { isNaN } from '../src/index.js';

describe('isNaN', () => {
  test('Should work', () => {
    expect(isNaN(NaN)).toEqual(true);
    expect(isNaN(Object(NaN))).toEqual(true);

    expect(isNaN(3)).toEqual(false);
    expect(isNaN(Number.MIN_VALUE)).toEqual(false);
    expect(isNaN(Infinity)).toEqual(false);
    expect(isNaN('3')).toEqual(false);
    expect(isNaN(null)).toEqual(false);
    expect(isNaN()).toEqual(false);
    expect(isNaN(undefined)).toEqual(false);
    expect(isNaN([1, 2, 3])).toEqual(false);
    expect(isNaN({ a: 1 })).toEqual(false);
    expect(isNaN(true)).toEqual(false);
    // eslint-disable-next-line prettier/prettier
    expect(isNaN(new Date)).toEqual(false);
    // eslint-disable-next-line prettier/prettier
    expect(isNaN(new Error)).toEqual(false);
    expect(isNaN(/x/)).toEqual(false);
  });
});
