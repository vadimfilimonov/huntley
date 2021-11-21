import { isUndefined } from '../src';

describe('isUndefined', () => {
  test('Should work', () => {
    expect(isUndefined(undefined)).toEqual(true);
    expect(isUndefined()).toEqual(true);
    expect(isUndefined(null)).toEqual(false);
    expect(isUndefined(true)).toEqual(false);
    expect(isUndefined(false)).toEqual(false);
  });
});
