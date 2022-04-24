import { nth } from '../src/index.js';

describe('nth', () => {
  test('nth with array', () => {
    expect(nth(['a', 'b', 'c', 'd'])).toEqual('a');
    expect(nth(['a', 'b', 'c', 'd'], 1)).toEqual('b');
    expect(nth(['a', 'b', 'c', 'd'], -2)).toEqual('c');
  });

  test('nth with string', () => {
    expect(nth('abcd')).toEqual('a');
    expect(nth('abcd', 1)).toEqual('b');
    expect(nth('abcd', -2)).toEqual('c');
  });

  test('nth with wrong arguments', () => {
    expect(nth(['a', 'b', 'c', 'd'], 'str')).toEqual('a');
    expect(nth(undefined, 1)).toEqual(undefined);
  });
});
