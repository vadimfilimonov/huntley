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
*   [isArray][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [isNil][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [isNull][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [isObjectLike][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [isUndefined][28]
    *   [Parameters][29]
    *   [Examples][30]
*   [last][31]
    *   [Parameters][32]
    *   [Examples][33]
*   [lt][34]
    *   [Parameters][35]
    *   [Examples][36]
*   [mean][37]
    *   [Parameters][38]
    *   [Examples][39]
*   [multiply][40]
    *   [Parameters][41]
    *   [Examples][42]
*   [noop][43]
    *   [Examples][44]
*   [partition][45]
    *   [Parameters][46]
    *   [Examples][47]
*   [size][48]
    *   [Parameters][49]
    *   [Examples][50]
*   [subtract][51]
    *   [Parameters][52]
    *   [Examples][53]
*   [sum][54]
    *   [Parameters][55]
    *   [Examples][56]
*   [uniq][57]
    *   [Parameters][58]
    *   [Examples][59]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][60]** 
*   `addend` **[number][60]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][60]** The total

## divide

Divide two numbers.

### Parameters

*   `dividend` **[number][60]** 
*   `divisor` **[number][60]** 

### Examples

```javascript
divide(6, 4);
// => 1.5
```

Returns **[number][60]** Returns the quotient

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

Returns **[boolean][61]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][62]** 

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

## isArray

Checks if `value` is classified as an `Array` object.

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isArray([1, 2, 3]);
// => true

isArray(document.body.children);
// => false

isArray('abc');
// => false
```

Returns **[boolean][61]** Returns `true` if `value` is an array, else `false`.

## isNil

Checks if `value` is `null` or `undefined`.

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isNil(null);
// => true

isNil(undefined);
// => true

isNil(NaN);
// => false
```

Returns **[boolean][61]** Returns `true` if `value` is nullish, else `false`.

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

Returns **[boolean][61]** Returns `true` if `value` is `null`, else `false`.

## isObjectLike

Checks if `value` is not `null` and has a `typeof` result of "object".

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isObjectLike({});
// => true

isObjectLike([1, 2, 3]);
// => true

isObjectLike(() => {});
// => false

isObjectLike(null);
// => false
```

Returns **[boolean][61]** Returns `true` if `value` is object-like, else `false`.

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

Returns **[boolean][61]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][62]** 

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

Returns **[boolean][61]** Returns true if value is less than other, else false.

## mean

Computes the mean of the values in `array`.

### Parameters

*   `array` **[Array][62]** 

### Examples

```javascript
mean([4, 2, 8, 6]);
// => 5
```

Returns **[number][60]** Returns the mean.

## multiply

Multiply two numbers.

### Parameters

*   `multiplier` **[number][60]** 
*   `multiplicand` **[number][60]** 

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][60]** Returns the product

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

*   `collection` **([Array][62] | [object][63])** The collection to iterate over.
*   `predicate` **[Function][64]** The function invoked per iteration.

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

Returns **[Array][62]** Returns the array of grouped elements.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][62] | [Object][63] | [string][65])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][60]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][60]** 
*   `subtrahend` **[number][60]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][60]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][62]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][60]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][62]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][62]** 

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

[16]: #isarray

[17]: #parameters-5

[18]: #examples-5

[19]: #isnil

[20]: #parameters-6

[21]: #examples-6

[22]: #isnull

[23]: #parameters-7

[24]: #examples-7

[25]: #isobjectlike

[26]: #parameters-8

[27]: #examples-8

[28]: #isundefined

[29]: #parameters-9

[30]: #examples-9

[31]: #last

[32]: #parameters-10

[33]: #examples-10

[34]: #lt

[35]: #parameters-11

[36]: #examples-11

[37]: #mean

[38]: #parameters-12

[39]: #examples-12

[40]: #multiply

[41]: #parameters-13

[42]: #examples-13

[43]: #noop

[44]: #examples-14

[45]: #partition

[46]: #parameters-14

[47]: #examples-15

[48]: #size

[49]: #parameters-15

[50]: #examples-16

[51]: #subtract

[52]: #parameters-16

[53]: #examples-17

[54]: #sum

[55]: #parameters-17

[56]: #examples-18

[57]: #uniq

[58]: #parameters-18

[59]: #examples-19

[60]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[61]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[62]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[63]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[64]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[65]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
