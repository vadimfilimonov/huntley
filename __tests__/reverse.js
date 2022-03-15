import { reverse } from '../src';

describe('reverse', () => {
  test('Should work', () => {
    const array = [1, 2, 3];
    expect(reverse(array)).toEqual([3, 2, 1]);
    expect(array).toEqual([3, 2, 1]);
  });

  test('Wrong arguments', () => {
    expect(reverse()).toEqual(undefined);
  });
});
