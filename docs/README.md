### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [gt][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [head][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [identity][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [isNull][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [isUndefined][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [last][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [lt][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [noop][25]
    *   [Examples][26]
*   [partition][27]
    *   [Parameters][28]
    *   [Examples][29]
*   [size][30]
    *   [Parameters][31]
    *   [Examples][32]
*   [subtract][33]
    *   [Parameters][34]
    *   [Examples][35]
*   [sum][36]
    *   [Parameters][37]
    *   [Examples][38]
*   [uniq][39]
    *   [Parameters][40]
    *   [Examples][41]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][42]** 
*   `addend` **[number][42]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][42]** The total

## gt

Checks if `value` is greater than `other`.

### Parameters

*   `value` **any** The value to compare.
*   `other` **any** The other value to compare.

### Examples

```javascript
gt(3, 1);
// => true

gt(3, 3);
// => false

gt(1, 3);
// => false
```

Returns **[boolean][43]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][44]** 

### Examples

```javascript
head([1, 2, 3]);
// => 1
```

Returns **any** 

## identity

This method returns the first argument it receives.

### Parameters

*   `value` **any** 

### Examples

```javascript
identity('Run');
// => 'Run'

identity((v) => v)('Run');
// => 'Run'

const object = { 'a': 1 };
identity(object) === object;
// => true
```

Returns **any** 

## isNull

Check if `value` is `null`

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isNull(null);
// => true

isNull(undefined);
// => false
```

Returns **[boolean][43]** Returns `true` if `value` is `null`, else `false`.

## isUndefined

Check if `value` is `undefined`

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isUndefined(undefined);
// => true

isUndefined(null);
// => false
```

Returns **[boolean][43]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][44]** 

### Examples

```javascript
last([1, 2, 3]);
// => 3
```

Returns **any** 

## lt

Checks if `value` is less than `other`.

### Parameters

*   `value` **any** The value to compare.
*   `other` **any** The other value to compare.

### Examples

```javascript
lt(1, 3);
// => true

lt(3, 3);
// => false

lt(3, 1);
// => false
```

Returns **[boolean][43]** Returns true if value is less than other, else false.

## noop

This function do nothing.

### Examples

```javascript
noop();
// => undefined
```

## partition

Splits a collection into two by callback.

### Parameters

*   `collection` **([Array][44] | [object][45])** The collection to iterate over.
*   `predicate` **[Function][46]** The function invoked per iteration.

### Examples

```javascript
const users = [
  { 'name': 'ivan', 'age': 18 },
  { 'name': 'adam', 'age': 25 },
  { 'name': 'carl', 'age': 39 }
];

partition(users, user => user.age >= 21);
// => objects for [['adam, carl'], ['ivan']]
```

Returns **[Array][44]** Returns the array of grouped elements.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][44] | [Object][45] | [string][47])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][42]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][42]** 
*   `subtrahend` **[number][42]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][42]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][44]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][42]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][44]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][44]** 

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #gt

[5]: #parameters-1

[6]: #examples-1

[7]: #head

[8]: #parameters-2

[9]: #examples-2

[10]: #identity

[11]: #parameters-3

[12]: #examples-3

[13]: #isnull

[14]: #parameters-4

[15]: #examples-4

[16]: #isundefined

[17]: #parameters-5

[18]: #examples-5

[19]: #last

[20]: #parameters-6

[21]: #examples-6

[22]: #lt

[23]: #parameters-7

[24]: #examples-7

[25]: #noop

[26]: #examples-8

[27]: #partition

[28]: #parameters-8

[29]: #examples-9

[30]: #size

[31]: #parameters-9

[32]: #examples-10

[33]: #subtract

[34]: #parameters-10

[35]: #examples-11

[36]: #sum

[37]: #parameters-11

[38]: #examples-12

[39]: #uniq

[40]: #parameters-12

[41]: #examples-13

[42]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[43]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[44]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[45]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[46]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[47]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
