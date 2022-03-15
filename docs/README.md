### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [constant][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [defaultTo][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [divide][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [drop][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [dropRight][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [gt][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [head][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [identity][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [initial][28]
    *   [Parameters][29]
    *   [Examples][30]
*   [isArray][31]
    *   [Parameters][32]
    *   [Examples][33]
*   [isNil][34]
    *   [Parameters][35]
    *   [Examples][36]
*   [isNull][37]
    *   [Parameters][38]
    *   [Examples][39]
*   [isObjectLike][40]
    *   [Parameters][41]
    *   [Examples][42]
*   [isUndefined][43]
    *   [Parameters][44]
    *   [Examples][45]
*   [last][46]
    *   [Parameters][47]
    *   [Examples][48]
*   [lt][49]
    *   [Parameters][50]
    *   [Examples][51]
*   [max][52]
    *   [Parameters][53]
    *   [Examples][54]
*   [mean][55]
    *   [Parameters][56]
    *   [Examples][57]
*   [min][58]
    *   [Parameters][59]
    *   [Examples][60]
*   [multiply][61]
    *   [Parameters][62]
    *   [Examples][63]
*   [noop][64]
    *   [Examples][65]
*   [partition][66]
    *   [Parameters][67]
    *   [Examples][68]
*   [reverse][69]
    *   [Parameters][70]
    *   [Examples][71]
*   [size][72]
    *   [Parameters][73]
    *   [Examples][74]
*   [stubArray][75]
    *   [Examples][76]
*   [stubFalse][77]
    *   [Examples][78]
*   [stubObject][79]
    *   [Examples][80]
*   [stubString][81]
    *   [Examples][82]
*   [stubTrue][83]
    *   [Examples][84]
*   [subtract][85]
    *   [Parameters][86]
    *   [Examples][87]
*   [sum][88]
    *   [Parameters][89]
    *   [Examples][90]
*   [uniq][91]
    *   [Parameters][92]
    *   [Examples][93]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][94]** The first number in an addition.
*   `addend` **[number][94]** The second number in an addition.

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][94]** Returns the total.

## constant

Creates a function that returns `value`.

### Parameters

*   `value` **any** The value to return from the new function.

### Examples

```javascript
const func = constant({ a: 1 });
func();
// => { a: 1 }
```

Returns **[Function][95]** Returns the new constant function.

## defaultTo

Checks `value` to determine whether a default value should be returned in its place.
The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.

### Parameters

*   `value` **any** 
*   `defaultValue` **any** 

### Examples

```javascript
defaultTo(1, 10);
// => 1

defaultTo(undefined, 10);
// => 10
```

Returns **[boolean][96]** 

## divide

Divide two numbers.

### Parameters

*   `dividend` **[number][94]** 
*   `divisor` **[number][94]** 

### Examples

```javascript
divide(6, 4);
// => 1.5
```

Returns **[number][94]** Returns the quotient

## drop

Creates a slice of `array` with `n` elements dropped from the beginning.

### Parameters

*   `array` **[Array][97]** The array to query.
*   `n` **[number][94]** The number of elements to drop. (optional, default `1`)

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

Returns **[Array][97]** Returns the slice of `array`.

## dropRight

Creates a slice of `array` with `n` elements dropped from the end.

### Parameters

*   `array` **[Array][97]** The array to query.
*   `n` **[number][94]** The number of elements to drop. (optional, default `1`)

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

Returns **[Array][97]** Returns the slice of `array`.

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

Returns **[boolean][96]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][97]** 

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

*   `array` **[Array][97]** The array to query.

### Examples

```javascript
initial([1, 2, 3]);
// => [1, 2]
```

Returns **[Array][97]** Returns the slice of `array`.

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

Returns **[boolean][96]** Returns `true` if `value` is an array, else `false`.

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

Returns **[boolean][96]** Returns `true` if `value` is nullish, else `false`.

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

Returns **[boolean][96]** Returns `true` if `value` is `null`, else `false`.

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

Returns **[boolean][96]** Returns `true` if `value` is object-like, else `false`.

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

Returns **[boolean][96]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][97]** 

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

Returns **[boolean][96]** Returns true if value is less than other, else false.

## max

Computes the maximum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][97]** The array to iterate over.

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

*   `array` **[Array][97]** 

### Examples

```javascript
mean([4, 2, 8, 6]);
// => 5
```

Returns **[number][94]** Returns the mean.

## min

Computes the minimum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][97]** The array to iterate over.

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

*   `multiplier` **[number][94]** 
*   `multiplicand` **[number][94]** 

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][94]** Returns the product

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

*   `collection` **([Array][97] | [object][98])** The collection to iterate over.
*   `predicate` **[Function][95]** The function invoked per iteration.

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

Returns **[Array][97]** Returns the array of grouped elements.

## reverse

Reverses `array` so that the first element becomes the last, the second element becomes the second to last, and so on.
**Note:** This method mutates `array` and is based on [Array#reverse][99].

### Parameters

*   `array` **[Array][97]** The array to modify.

### Examples

```javascript
reverse([1, 2, 3]);
// => true
```

Returns **[Array][97]** Returns `array`.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][97] | [Object][98] | [string][100])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][94]** 

## stubArray

This method returns a new empty array.

### Examples

```javascript
stubArray();
// => []
```

Returns **[Array][97]** Returns the new empty array

## stubFalse

This method returns `false`.

### Examples

```javascript
stubFalse();
// => false
```

Returns **[boolean][96]** 

## stubObject

This method returns a new empty object.

### Examples

```javascript
stubObject();
// => {}
```

Returns **[Object][98]** Returns the new empty object

## stubString

This method returns an empty string.

### Examples

```javascript
stubString();
// => ''
```

Returns **[string][100]** Returns the empty string

## stubTrue

This method returns `true`.

### Examples

```javascript
stubTrue();
// => true
```

Returns **[boolean][96]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][94]** 
*   `subtrahend` **[number][94]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][94]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][97]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][94]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][97]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][97]** 

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #constant

[5]: #parameters-1

[6]: #examples-1

[7]: #defaultto

[8]: #parameters-2

[9]: #examples-2

[10]: #divide

[11]: #parameters-3

[12]: #examples-3

[13]: #drop

[14]: #parameters-4

[15]: #examples-4

[16]: #dropright

[17]: #parameters-5

[18]: #examples-5

[19]: #gt

[20]: #parameters-6

[21]: #examples-6

[22]: #head

[23]: #parameters-7

[24]: #examples-7

[25]: #identity

[26]: #parameters-8

[27]: #examples-8

[28]: #initial

[29]: #parameters-9

[30]: #examples-9

[31]: #isarray

[32]: #parameters-10

[33]: #examples-10

[34]: #isnil

[35]: #parameters-11

[36]: #examples-11

[37]: #isnull

[38]: #parameters-12

[39]: #examples-12

[40]: #isobjectlike

[41]: #parameters-13

[42]: #examples-13

[43]: #isundefined

[44]: #parameters-14

[45]: #examples-14

[46]: #last

[47]: #parameters-15

[48]: #examples-15

[49]: #lt

[50]: #parameters-16

[51]: #examples-16

[52]: #max

[53]: #parameters-17

[54]: #examples-17

[55]: #mean

[56]: #parameters-18

[57]: #examples-18

[58]: #min

[59]: #parameters-19

[60]: #examples-19

[61]: #multiply

[62]: #parameters-20

[63]: #examples-20

[64]: #noop

[65]: #examples-21

[66]: #partition

[67]: #parameters-21

[68]: #examples-22

[69]: #reverse

[70]: #parameters-22

[71]: #examples-23

[72]: #size

[73]: #parameters-23

[74]: #examples-24

[75]: #stubarray

[76]: #examples-25

[77]: #stubfalse

[78]: #examples-26

[79]: #stubobject

[80]: #examples-27

[81]: #stubstring

[82]: #examples-28

[83]: #stubtrue

[84]: #examples-29

[85]: #subtract

[86]: #parameters-24

[87]: #examples-30

[88]: #sum

[89]: #parameters-25

[90]: #examples-31

[91]: #uniq

[92]: #parameters-26

[93]: #examples-32

[94]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[95]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[96]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[97]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[98]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[99]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

[100]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
