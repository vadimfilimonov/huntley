import { gt } from '../src';

describe('gt', () => {
  test('Should work', () => {
    expect(gt(3, 1)).toEqual(true);
    expect(gt(3, 3)).toEqual(false);
    expect(gt(1, 3)).toEqual(false);
  });

  test('wrong arguments', () => {
    expect(gt()).toEqual(false);
    expect(gt(42)).toEqual(false);
  });
});
