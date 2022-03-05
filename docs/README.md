### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [divide][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [drop][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [dropRight][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [gt][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [head][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [identity][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [initial][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [isArray][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [isNil][28]
    *   [Parameters][29]
    *   [Examples][30]
*   [isNull][31]
    *   [Parameters][32]
    *   [Examples][33]
*   [isObjectLike][34]
    *   [Parameters][35]
    *   [Examples][36]
*   [isUndefined][37]
    *   [Parameters][38]
    *   [Examples][39]
*   [last][40]
    *   [Parameters][41]
    *   [Examples][42]
*   [lt][43]
    *   [Parameters][44]
    *   [Examples][45]
*   [max][46]
    *   [Parameters][47]
    *   [Examples][48]
*   [mean][49]
    *   [Parameters][50]
    *   [Examples][51]
*   [min][52]
    *   [Parameters][53]
    *   [Examples][54]
*   [multiply][55]
    *   [Parameters][56]
    *   [Examples][57]
*   [noop][58]
    *   [Examples][59]
*   [partition][60]
    *   [Parameters][61]
    *   [Examples][62]
*   [size][63]
    *   [Parameters][64]
    *   [Examples][65]
*   [stubArray][66]
    *   [Examples][67]
*   [stubFalse][68]
    *   [Examples][69]
*   [stubString][70]
    *   [Examples][71]
*   [stubTrue][72]
    *   [Examples][73]
*   [subtract][74]
    *   [Parameters][75]
    *   [Examples][76]
*   [sum][77]
    *   [Parameters][78]
    *   [Examples][79]
*   [uniq][80]
    *   [Parameters][81]
    *   [Examples][82]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][83]** The first number in an addition.
*   `addend` **[number][83]** The second number in an addition.

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][83]** Returns the total.

## divide

Divide two numbers.

### Parameters

*   `dividend` **[number][83]** 
*   `divisor` **[number][83]** 

### Examples

```javascript
divide(6, 4);
// => 1.5
```

Returns **[number][83]** Returns the quotient

## drop

Creates a slice of `array` with `n` elements dropped from the beginning.

### Parameters

*   `array` **[Array][84]** The array to query.
*   `n` **[number][83]** The number of elements to drop. (optional, default `1`)

### Examples

```javascript
drop([1, 2, 3]);
// => [2, 3]

drop([1, 2, 3], 2);
// => [3]

drop([1, 2, 3], 5);
// => []

drop([1, 2, 3], 0);
// => [1, 2, 3]
```

Returns **[Array][84]** Returns the slice of `array`.

## dropRight

Creates a slice of `array` with `n` elements dropped from the end.

### Parameters

*   `array` **[Array][84]** The array to query.
*   `n` **[number][83]** The number of elements to drop. (optional, default `1`)

### Examples

```javascript
dropRight([1, 2, 3]);
// => [1, 2]

dropRight([1, 2, 3], 2);
// => [1]

dropRight([1, 2, 3], 5);
// => []

dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

Returns **[Array][84]** Returns the slice of `array`.

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

Returns **[boolean][85]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][84]** 

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

## initial

Gets all but the last element of `array`.

### Parameters

*   `array` **[Array][84]** The array to query.

### Examples

```javascript
initial([1, 2, 3]);
// => [1, 2]
```

Returns **[Array][84]** Returns the slice of `array`.

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

Returns **[boolean][85]** Returns `true` if `value` is an array, else `false`.

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

Returns **[boolean][85]** Returns `true` if `value` is nullish, else `false`.

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

Returns **[boolean][85]** Returns `true` if `value` is `null`, else `false`.

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

Returns **[boolean][85]** Returns `true` if `value` is object-like, else `false`.

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

Returns **[boolean][85]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][84]** 

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

Returns **[boolean][85]** Returns true if value is less than other, else false.

## max

Computes the maximum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][84]** The array to iterate over.

### Examples

```javascript
max([4, 2, 8, 6]);
// => 8

max([])
// => undefined
```

Returns **any** Returns the maximum value.

## mean

Computes the mean of the values in `array`.

### Parameters

*   `array` **[Array][84]** 

### Examples

```javascript
mean([4, 2, 8, 6]);
// => 5
```

Returns **[number][83]** Returns the mean.

## min

Computes the minimum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][84]** The array to iterate over.

### Examples

```javascript
min([4, 2, 8, 6]);
// => 2

min([])
// => undefined
```

Returns **any** Returns the minimum value.

## multiply

Multiply two numbers.

### Parameters

*   `multiplier` **[number][83]** 
*   `multiplicand` **[number][83]** 

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][83]** Returns the product

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

*   `collection` **([Array][84] | [object][86])** The collection to iterate over.
*   `predicate` **[Function][87]** The function invoked per iteration.

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

Returns **[Array][84]** Returns the array of grouped elements.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][84] | [Object][86] | [string][88])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][83]** 

## stubArray

This method returns a new empty array.

### Examples

```javascript
stubArray();
// => []
```

Returns **[Array][84]** Returns the new empty array

## stubFalse

This method returns `false`.

### Examples

```javascript
stubFalse();
// => false
```

Returns **[boolean][85]** 

## stubString

This method returns an empty string.

### Examples

```javascript
stubString();
// => ''
```

Returns **[string][88]** Returns the empty string

## stubTrue

This method returns `true`.

### Examples

```javascript
stubTrue();
// => true
```

Returns **[boolean][85]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][83]** 
*   `subtrahend` **[number][83]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][83]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][84]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][83]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][84]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][84]** 

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #divide

[5]: #parameters-1

[6]: #examples-1

[7]: #drop

[8]: #parameters-2

[9]: #examples-2

[10]: #dropright

[11]: #parameters-3

[12]: #examples-3

[13]: #gt

[14]: #parameters-4

[15]: #examples-4

[16]: #head

[17]: #parameters-5

[18]: #examples-5

[19]: #identity

[20]: #parameters-6

[21]: #examples-6

[22]: #initial

[23]: #parameters-7

[24]: #examples-7

[25]: #isarray

[26]: #parameters-8

[27]: #examples-8

[28]: #isnil

[29]: #parameters-9

[30]: #examples-9

[31]: #isnull

[32]: #parameters-10

[33]: #examples-10

[34]: #isobjectlike

[35]: #parameters-11

[36]: #examples-11

[37]: #isundefined

[38]: #parameters-12

[39]: #examples-12

[40]: #last

[41]: #parameters-13

[42]: #examples-13

[43]: #lt

[44]: #parameters-14

[45]: #examples-14

[46]: #max

[47]: #parameters-15

[48]: #examples-15

[49]: #mean

[50]: #parameters-16

[51]: #examples-16

[52]: #min

[53]: #parameters-17

[54]: #examples-17

[55]: #multiply

[56]: #parameters-18

[57]: #examples-18

[58]: #noop

[59]: #examples-19

[60]: #partition

[61]: #parameters-19

[62]: #examples-20

[63]: #size

[64]: #parameters-20

[65]: #examples-21

[66]: #stubarray

[67]: #examples-22

[68]: #stubfalse

[69]: #examples-23

[70]: #stubstring

[71]: #examples-24

[72]: #stubtrue

[73]: #examples-25

[74]: #subtract

[75]: #parameters-21

[76]: #examples-26

[77]: #sum

[78]: #parameters-22

[79]: #examples-27

[80]: #uniq

[81]: #parameters-23

[82]: #examples-28

[83]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[84]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[85]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[86]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[87]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[88]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
