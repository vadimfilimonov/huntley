import { isNil } from '../src/index.js';

describe('isNil', () => {
  test('Should work', () => {
    expect(isNil(null)).toEqual(true);
    expect(isNil(undefined)).toEqual(true);
    expect(isNil(NaN)).toEqual(false);
    expect(isNil(true)).toEqual(false);
    expect(isNil(false)).toEqual(false);
  });
});
