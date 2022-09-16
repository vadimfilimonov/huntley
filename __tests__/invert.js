import { invert } from '../src/index.js';

describe('Invert', () => {
  test('should work', () => {
    expect(invert({ a: 1, b: 2, c: 1 })).toEqual({ 1: 'c', 2: 'b' });
  });
});
