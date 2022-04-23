import { defaultTo } from '../src/index.js';

describe('DefaultTo', () => {
  test('Should work', () => {
    expect(defaultTo(1, 10)).toEqual(1);
    expect(defaultTo(undefined, 10)).toEqual(10);
    expect(defaultTo(null, 10)).toEqual(10);
    expect(defaultTo(NaN, 10)).toEqual(10);
  });
});
