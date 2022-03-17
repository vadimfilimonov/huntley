import { upperFirst } from '../src';

describe('UpperFirst', () => {
  test('Should work', () => {
    expect(upperFirst('fred')).toEqual('Fred');
    expect(upperFirst('FRED')).toEqual('FRED');
    expect(upperFirst('')).toEqual('');
  });
});
