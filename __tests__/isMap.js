import { isMap } from '../src/index.js';

describe('isMap', () => {
  test('should return `true` for map', () => {
    expect(isMap(new Map())).toEqual(true);
    // eslint-disable-next-line prettier/prettier
    expect(isMap(new Map)).toEqual(true);
  });

  test('should return `false` for non-map', () => {
    expect(isMap([1, 2, 3])).toEqual(false);
    expect(isMap(true)).toEqual(false);
    expect(isMap(new Date())).toEqual(false);
    expect(isMap(new Error())).toEqual(false);
    expect(isMap({ a: 1 })).toEqual(false);
    expect(isMap(1)).toEqual(false);
    expect(isMap(/x/)).toEqual(false);
    expect(isMap(new WeakMap())).toEqual(false);
    // eslint-disable-next-line prettier/prettier
    expect(isMap(new WeakMap)).toEqual(false);
  });
});
