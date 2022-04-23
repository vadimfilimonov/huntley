import { isNull } from '../src/index.js';

describe('isNull', () => {
  test('Should work', () => {
    expect(isNull(null)).toEqual(true);
    expect(isNull()).toEqual(false);
    expect(isNull(undefined)).toEqual(false);
    expect(isNull(true)).toEqual(false);
    expect(isNull(false)).toEqual(false);
  });
});
