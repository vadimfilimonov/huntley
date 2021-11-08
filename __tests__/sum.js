import { sum } from '../src';

describe('Sum', () => {
  test('Should work', () => {
    expect(sum([4, 2, 8, 6])).toEqual(20);
  });

  test('wrong arguments', () => {
    expect(sum([])).toEqual(0);
  });
});
