import { unary } from '../src/index.js';

describe('Unary', () => {
  test('Should work', () => {
    expect(['6', '8', '10'].map(unary(parseInt))).toEqual([6, 8, 10]);
  });
});
