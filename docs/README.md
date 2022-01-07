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
*   [isNil][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [isNull][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [isObjectLike][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [isUndefined][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [last][28]
    *   [Parameters][29]
    *   [Examples][30]
*   [lt][31]
    *   [Parameters][32]
    *   [Examples][33]
*   [mean][34]
    *   [Parameters][35]
    *   [Examples][36]
*   [multiply][37]
    *   [Parameters][38]
    *   [Examples][39]
*   [noop][40]
    *   [Examples][41]
*   [partition][42]
    *   [Parameters][43]
    *   [Examples][44]
*   [size][45]
    *   [Parameters][46]
    *   [Examples][47]
*   [subtract][48]
    *   [Parameters][49]
    *   [Examples][50]
*   [sum][51]
    *   [Parameters][52]
    *   [Examples][53]
*   [uniq][54]
    *   [Parameters][55]
    *   [Examples][56]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][57]** 
*   `addend` **[number][57]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][57]** The total

## divide

Divide two numbers.

### Parameters

*   `dividend` **[number][57]** 
*   `divisor` **[number][57]** 

### Examples

```javascript
divide(6, 4);
// => 1.5
```

Returns **[number][57]** Returns the quotient

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

Returns **[boolean][58]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][59]** 

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

Returns **[boolean][58]** Returns `true` if `value` is nullish, else `false`.

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

Returns **[boolean][58]** Returns `true` if `value` is `null`, else `false`.

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

Returns **[boolean][58]** Returns `true` if `value` is object-like, else `false`.

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

Returns **[boolean][58]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][59]** 

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

Returns **[boolean][58]** Returns true if value is less than other, else false.

## mean

Computes the mean of the values in `array`.

### Parameters

*   `array` **[Array][59]** 

### Examples

```javascript
mean([4, 2, 8, 6]);
// => 5
```

Returns **[number][57]** Returns the mean.

## multiply

Multiply two numbers.

### Parameters

*   `multiplier` **[number][57]** 
*   `multiplicand` **[number][57]** 

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][57]** Returns the product

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

*   `collection` **([Array][59] | [object][60])** The collection to iterate over.
*   `predicate` **[Function][61]** The function invoked per iteration.

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

Returns **[Array][59]** Returns the array of grouped elements.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][59] | [Object][60] | [string][62])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][57]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][57]** 
*   `subtrahend` **[number][57]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][57]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][59]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][57]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][59]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][59]** 

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

[16]: #isnil

[17]: #parameters-5

[18]: #examples-5

[19]: #isnull

[20]: #parameters-6

[21]: #examples-6

[22]: #isobjectlike

[23]: #parameters-7

[24]: #examples-7

[25]: #isundefined

[26]: #parameters-8

[27]: #examples-8

[28]: #last

[29]: #parameters-9

[30]: #examples-9

[31]: #lt

[32]: #parameters-10

[33]: #examples-10

[34]: #mean

[35]: #parameters-11

[36]: #examples-11

[37]: #multiply

[38]: #parameters-12

[39]: #examples-12

[40]: #noop

[41]: #examples-13

[42]: #partition

[43]: #parameters-13

[44]: #examples-14

[45]: #size

[46]: #parameters-14

[47]: #examples-15

[48]: #subtract

[49]: #parameters-15

[50]: #examples-16

[51]: #sum

[52]: #parameters-16

[53]: #examples-17

[54]: #uniq

[55]: #parameters-17

[56]: #examples-18

[57]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[58]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[59]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[60]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[61]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[62]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
