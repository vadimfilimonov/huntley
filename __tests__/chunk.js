import { chunk } from '../src/index.js';

describe('Chunk', () => {
  test('Should work', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    expect(chunk(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']]);
  });

  test('wrong arguments', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 0)).toEqual([]);
    expect(chunk(['a', 'b', 'c', 'd'], 1.9)).toEqual([['a'], ['b'], ['c'], ['d']]);
    expect(chunk(['a', 'b', 'c', 'd'], -1)).toEqual([]);
    expect(chunk([], 2)).toEqual([]);
  });
});
