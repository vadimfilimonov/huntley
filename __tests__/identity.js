import { identity } from '../src/index.js';

describe('Identity', () => {
  const object = { a: 1 };

  test('Should work', () => {
    expect(identity(object)).toEqual(object);
    expect(identity('Run')).toEqual('Run');
    expect(identity((v) => v)('Run')).toEqual('Run');
  });

  test('wrong arguments', () => {
    expect(identity()).toEqual(undefined);
  });
});
