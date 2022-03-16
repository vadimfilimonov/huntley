import { reverse } from '../src';

describe('reverse', () => {
  test('Should work', () => {
    const actual = [1, 2, 3];
    const expected = [3, 2, 1];

    expect(reverse(actual)).toEqual(expected);
    expect(actual).toEqual(expected);
  });

  test('Wrong arguments', () => {
    expect(reverse()).toEqual(undefined);
  });
});
