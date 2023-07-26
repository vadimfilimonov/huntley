import { shuffle } from '../src/index.js';

describe('Shuffle', () => {
  const array = [1, 2, 3, 4];
  const object = { a: 1, b: 2, c: 3, d: 4 };

  test('should return a new array', () => {
    expect(shuffle(array)).not.toBe(array);
  });

  test('should contain the same elements after a collection is shuffled', () => {
    expect(shuffle(array).sort()).toStrictEqual(array);
    expect(shuffle(object).sort()).toStrictEqual(array);
  });

  it('should treat number values for `collection` as empty', () => {
    expect(shuffle(1)).toStrictEqual([]);
  });
});
