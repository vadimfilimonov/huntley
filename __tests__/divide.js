import { divide } from '../src/index.js';

describe('divide', () => {
  test('Should work', () => {
    expect(divide(6, 4)).toEqual(1.5);
    expect(divide(42, 0)).toEqual(Infinity);
  });

  test('wrong arguments', () => {
    expect(divide(42)).toEqual(42);
    expect(divide()).toEqual(1);
  });
});
