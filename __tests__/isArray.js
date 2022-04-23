import { isArray } from '../src/index.js';

describe('isArray', () => {
  test('Should work', () => {
    expect(isArray([1, 2, 3])).toEqual(true);
    expect(isArray('abc')).toEqual(false);
    expect(isArray(() => {})).toEqual(false);
  });
});
