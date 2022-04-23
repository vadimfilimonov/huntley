import { isObjectLike } from '../src/index.js';

describe('isObjectLike', () => {
  test('Should work', () => {
    expect(isObjectLike({})).toEqual(true);
    expect(isObjectLike([1, 2, 3])).toEqual(true);
    expect(isObjectLike(() => {})).toEqual(false);
    expect(isObjectLike(null)).toEqual(false);
  });
});
