import { upperFirst } from '../src/index.js';

describe('UpperFirst', () => {
  test('Should work', () => {
    expect(upperFirst('fred')).toEqual('Fred');
    expect(upperFirst('FRED')).toEqual('FRED');
    expect(upperFirst('')).toEqual('');
  });
});
