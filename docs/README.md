### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [divide][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [gt][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [head][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [identity][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [isNull][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [isUndefined][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [last][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [lt][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [multiply][28]
    *   [Parameters][29]
    *   [Examples][30]
*   [noop][31]
    *   [Examples][32]
*   [partition][33]
    *   [Parameters][34]
    *   [Examples][35]
*   [size][36]
    *   [Parameters][37]
    *   [Examples][38]
*   [subtract][39]
    *   [Parameters][40]
    *   [Examples][41]
*   [sum][42]
    *   [Parameters][43]
    *   [Examples][44]
*   [uniq][45]
    *   [Parameters][46]
    *   [Examples][47]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][48]** 
*   `addend` **[number][48]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][48]** The total

## divide

Divide two numbers.

### Parameters

*   `dividend` **[number][48]** 
*   `divisor` **[number][48]** 

### Examples

```javascript
divide(6, 4);
// => 1.5
```

Returns **[number][48]** Returns the quotient

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

Returns **[boolean][49]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][50]** 

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

Returns **[boolean][49]** Returns `true` if `value` is `null`, else `false`.

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

Returns **[boolean][49]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][50]** 

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

Returns **[boolean][49]** Returns true if value is less than other, else false.

## multiply

Multiply two numbers.

### Parameters

*   `multiplier` **[number][48]** 
*   `multiplicand` **[number][48]** 

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][48]** Returns the product

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

*   `collection` **([Array][50] | [object][51])** The collection to iterate over.
*   `predicate` **[Function][52]** The function invoked per iteration.

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

Returns **[Array][50]** Returns the array of grouped elements.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][50] | [Object][51] | [string][53])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][48]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][48]** 
*   `subtrahend` **[number][48]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][48]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][50]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][48]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][50]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][50]** 

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #divide

[5]: #parameters-1

[6]: #examples-1

[7]: #gt

[8]: #parameters-2

[9]: #examples-2

[10]: #head

[11]: #parameters-3

[12]: #examples-3

[13]: #identity

[14]: #parameters-4

[15]: #examples-4

[16]: #isnull

[17]: #parameters-5

[18]: #examples-5

[19]: #isundefined

[20]: #parameters-6

[21]: #examples-6

[22]: #last

[23]: #parameters-7

[24]: #examples-7

[25]: #lt

[26]: #parameters-8

[27]: #examples-8

[28]: #multiply

[29]: #parameters-9

[30]: #examples-9

[31]: #noop

[32]: #examples-10

[33]: #partition

[34]: #parameters-10

[35]: #examples-11

[36]: #size

[37]: #parameters-11

[38]: #examples-12

[39]: #subtract

[40]: #parameters-12

[41]: #examples-13

[42]: #sum

[43]: #parameters-13

[44]: #examples-14

[45]: #uniq

[46]: #parameters-14

[47]: #examples-15

[48]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[49]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[50]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[51]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[52]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[53]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
