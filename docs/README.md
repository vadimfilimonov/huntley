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
*   [multiply][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [noop][28]
    *   [Examples][29]
*   [partition][30]
    *   [Parameters][31]
    *   [Examples][32]
*   [size][33]
    *   [Parameters][34]
    *   [Examples][35]
*   [subtract][36]
    *   [Parameters][37]
    *   [Examples][38]
*   [sum][39]
    *   [Parameters][40]
    *   [Examples][41]
*   [uniq][42]
    *   [Parameters][43]
    *   [Examples][44]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][45]** 
*   `addend` **[number][45]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][45]** The total

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

Returns **[boolean][46]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][47]** 

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

Returns **[boolean][46]** Returns `true` if `value` is `null`, else `false`.

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

Returns **[boolean][46]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][47]** 

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

Returns **[boolean][46]** Returns true if value is less than other, else false.

## multiply

Multiply two numbers.

### Parameters

*   `multiplier` **[number][45]** 
*   `multiplicand` **[number][45]** 

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][45]** Returns the product

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

*   `collection` **([Array][47] | [object][48])** The collection to iterate over.
*   `predicate` **[Function][49]** The function invoked per iteration.

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

Returns **[Array][47]** Returns the array of grouped elements.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][47] | [Object][48] | [string][50])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][45]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][45]** 
*   `subtrahend` **[number][45]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][45]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][47]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][45]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][47]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][47]** 

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

[25]: #multiply

[26]: #parameters-8

[27]: #examples-8

[28]: #noop

[29]: #examples-9

[30]: #partition

[31]: #parameters-9

[32]: #examples-10

[33]: #size

[34]: #parameters-10

[35]: #examples-11

[36]: #subtract

[37]: #parameters-11

[38]: #examples-12

[39]: #sum

[40]: #parameters-12

[41]: #examples-13

[42]: #uniq

[43]: #parameters-13

[44]: #examples-14

[45]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[46]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[47]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[48]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[49]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[50]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
