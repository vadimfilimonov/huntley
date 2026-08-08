import { jest } from '@jest/globals';
import { partition } from '../src/index.js';

describe('Partition', () => {
  test('Split array into two groups', () => {
    const users = [
      { name: 'ivan', age: 18 },
      { name: 'adam', age: 25 },
      { name: 'carl', age: 39 },
    ];

    expect(partition(users, (user) => user.age > 21)).toEqual([
      [
        { name: 'adam', age: 25 },
        { name: 'carl', age: 39 },
      ],
      [{ name: 'ivan', age: 18 }],
    ]);
  });

  test('Split object values into two groups', () => {
    const user = { name: 'ivan', age: 18, status: true };

    expect(partition(user, (value) => typeof value === 'string')).toEqual([['ivan'], [18, true]]);
  });

  test('Calls predicate once for each item', () => {
    const predicate = jest.fn((value) => value > 1);

    expect(partition([1, 2, 3], predicate)).toEqual([[2, 3], [1]]);
    expect(predicate).toHaveBeenCalledTimes(3);
  });
});
