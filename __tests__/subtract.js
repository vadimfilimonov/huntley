import { subtract } from '../src/index.js';

describe('Subtract', () => {
  test('subtracts 6 - 4 to equal 2', () => {
    expect(subtract(6, 4)).toEqual(2);
  });

  test('wrong arguments', () => {
    expect(subtract()).toEqual(0);
    expect(subtract(6)).toEqual(6);
  });
});
