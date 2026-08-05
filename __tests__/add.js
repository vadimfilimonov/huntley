import { add } from '../src/index.js';

describe('Add', () => {
  test('adds 6 + 4 to equal 10', () => {
    expect(add(6, 4)).toEqual(10);
  });

  test('wrong arguments', () => {
    expect(add()).toEqual(0);
    expect(add(2)).toEqual(2);
    expect(add(undefined, 2)).toEqual(2);
    expect(add(0, 2)).toEqual(2);
    expect(add(2, 0)).toEqual(2);
  });
});
