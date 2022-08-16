import { join } from '../src/index.js';

describe('join', () => {
  test('should return join all array elements into a string', () => {
    expect(join(['a', 'b', 'c'], '~')).toEqual('a~b~c');
    expect(join([1, 2, 3])).toEqual('1,2,3');
  });

  test('should return an empty string', () => {
    expect(join([])).toEqual('');
  });
});
