import { filter } from '../src/index.js';

describe('filter', () => {
  test('should work', () => {
    const users = [
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
    ];

    const expected = [{ user: 'fred', age: 40, active: false }];

    expect(filter(users, (o) => !o.active)).toEqual(expected);
  });
});
