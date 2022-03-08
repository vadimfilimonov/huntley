import { constant } from '../src';

describe('constant', () => {
  const object = { a: 1 };
  const func = constant(object);

  test('Should work', () => {
    expect(func()).toEqual(object);
    expect(constant('Run')()).toEqual('Run');
  });

  test('wrong arguments', () => {
    expect(constant()()).toEqual(undefined);
  });
});
