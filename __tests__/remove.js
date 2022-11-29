import { remove } from '../src/index.js';

describe('Remove', () => {
  test('Should work', () => {
    const input = [1, 2, 3, 4];
    const actual = remove(input, (n) => n % 2 === 0);
    const expected = [2, 4];

    expect(input).toEqual([1, 3]);
    expect(actual).toEqual(expected);
  });
});
