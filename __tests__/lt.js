import { lt } from '../src/index.js';

describe('lt', () => {
  test('Should work', () => {
    expect(lt(1, 3)).toEqual(true);
    expect(lt(3, 3)).toEqual(false);
    expect(lt(3, 1)).toEqual(false);
  });

  test('wrong arguments', () => {
    expect(lt()).toEqual(false);
    expect(lt(42)).toEqual(false);
  });
});
