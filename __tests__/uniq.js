import { uniq } from '../src/index.js';

describe('Uniq', () => {
  test('It works', () => {
    expect(uniq([])).toEqual([]);
    expect(uniq([2, 1, 2])).toEqual([2, 1]);
  });
});
