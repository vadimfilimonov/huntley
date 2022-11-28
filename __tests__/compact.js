import { compact } from '../src/index.js';

describe('Compact', () => {
  test('should filter falsey values', () => {
    const actual = [0, 1, false, 2, '', 3, undefined, null, NaN];
    const expected = [1, 2, 3];

    expect(compact(actual)).toEqual(expected);
  });
});
