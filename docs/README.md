### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [chunk][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [constant][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [defaultTo][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [divide][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [drop][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [dropRight][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [fill][22]
    *   [Parameters][23]
*   [gt][24]
    *   [Parameters][25]
    *   [Examples][26]
*   [head][27]
    *   [Parameters][28]
    *   [Examples][29]
*   [identity][30]
    *   [Parameters][31]
    *   [Examples][32]
*   [initial][33]
    *   [Parameters][34]
    *   [Examples][35]
*   [isArray][36]
    *   [Parameters][37]
    *   [Examples][38]
*   [isMap][39]
    *   [Parameters][40]
    *   [Examples][41]
*   [isNaN][42]
    *   [Parameters][43]
    *   [Examples][44]
*   [isNil][45]
    *   [Parameters][46]
    *   [Examples][47]
*   [isNull][48]
    *   [Parameters][49]
    *   [Examples][50]
*   [isNumber][51]
    *   [Parameters][52]
    *   [Examples][53]
*   [isObjectLike][54]
    *   [Parameters][55]
    *   [Examples][56]
*   [isString][57]
    *   [Parameters][58]
    *   [Examples][59]
*   [isUndefined][60]
    *   [Parameters][61]
    *   [Examples][62]
*   [last][63]
    *   [Parameters][64]
    *   [Examples][65]
*   [lt][66]
    *   [Parameters][67]
    *   [Examples][68]
*   [max][69]
    *   [Parameters][70]
    *   [Examples][71]
*   [mean][72]
    *   [Parameters][73]
    *   [Examples][74]
*   [min][75]
    *   [Parameters][76]
    *   [Examples][77]
*   [multiply][78]
    *   [Parameters][79]
    *   [Examples][80]
*   [noop][81]
    *   [Examples][82]
*   [nth][83]
    *   [Parameters][84]
    *   [Examples][85]
*   [partition][86]
    *   [Parameters][87]
    *   [Examples][88]
*   [reverse][89]
    *   [Parameters][90]
    *   [Examples][91]
*   [size][92]
    *   [Parameters][93]
    *   [Examples][94]
*   [stubArray][95]
    *   [Examples][96]
*   [stubFalse][97]
    *   [Examples][98]
*   [stubObject][99]
    *   [Examples][100]
*   [stubString][101]
    *   [Examples][102]
*   [stubTrue][103]
    *   [Examples][104]
*   [subtract][105]
    *   [Parameters][106]
    *   [Examples][107]
*   [sum][108]
    *   [Parameters][109]
    *   [Examples][110]
*   [tail][111]
    *   [Parameters][112]
    *   [Examples][113]
*   [uniq][114]
    *   [Parameters][115]
    *   [Examples][116]
*   [upperFirst][117]
    *   [Parameters][118]
    *   [Examples][119]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][120]** The first number in an addition.
*   `addend` **[number][120]** The second number in an addition.

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][120]** Returns the total.

## chunk

Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.

### Parameters

*   `array` **[Array][121]** The array to process.
*   `size` **[number][120]** The length of each chunk. (optional, default `1`)

### Examples

```javascript
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

Returns **[Array][121]** Returns the new array of chunks.

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

Returns **[Function][122]** Returns the new constant function.

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

Returns **[boolean][123]** 

## divide

Divide two numbers.

### Parameters

*   `dividend` **[number][120]** 
*   `divisor` **[number][120]** 

### Examples

```javascript
divide(6, 4);
// => 1.5
```

Returns **[number][120]** Returns the quotient

## drop

Creates a slice of `array` with `n` elements dropped from the beginning.

### Parameters

*   `array` **[Array][121]** The array to query.
*   `n` **[number][120]** The number of elements to drop. (optional, default `1`)

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

Returns **[Array][121]** Returns the slice of `array`.

## dropRight

Creates a slice of `array` with `n` elements dropped from the end.

### Parameters

*   `array` **[Array][121]** The array to query.
*   `n` **[number][120]** The number of elements to drop. (optional, default `1`)

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

Returns **[Array][121]** Returns the slice of `array`.

## fill

Fills elements of `array` with `value` from `start` up to, but not including, `end`.

### Parameters

*   `array` **[Array][121]** The array to fill.
*   `value` **any** The value to fill `array` with.
*   `start` **[number][120]** The start position. (optional, default `0`)
*   `end` **[number][120]** The end position. (optional, default `array.length`)

Returns **[Array][121]** Returns `array`.

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

Returns **[boolean][123]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][121]** 

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

*   `array` **[Array][121]** The array to query.

### Examples

```javascript
initial([1, 2, 3]);
// => [1, 2]
```

Returns **[Array][121]** Returns the slice of `array`.

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

Returns **[boolean][123]** Returns `true` if `value` is an array, else `false`.

## isMap

Checks if `value` is classified as a `Map` object.

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isMap(new Map);
// => true

isMap(new WeakMap);
// => false
```

Returns **[boolean][123]** Returns `true` if `value` is map, else `false`.

## isNaN

Checks if `value` is `NaN`.

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isNaN(NaN);
// => true

isNaN(new Number(NaN));
// => true

isNaN(undefined);
// => false
```

Returns **[boolean][123]** Returns `true` if `value` is a `NaN`, else `false`.

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

Returns **[boolean][123]** Returns `true` if `value` is nullish, else `false`.

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

Returns **[boolean][123]** Returns `true` if `value` is `null`, else `false`.

## isNumber

Checks if `value` is classified as a `Number` primitive or object.

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
Number(3);
// => true

Number('3');
// => false
```

Returns **[boolean][123]** Returns `true` if `value` is a number, else `false`.

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

Returns **[boolean][123]** Returns `true` if `value` is object-like, else `false`.

## isString

Checks if `value` is classified as a `String` primitive or object.

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isString('abc');
// => true

isString(1);
// => false
```

Returns **[boolean][123]** Returns `true` if `value` is a string, else `false`.

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

Returns **[boolean][123]** Returns `true` if `value` is `undefined`, else `false`.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][121]** 

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

Returns **[boolean][123]** Returns true if value is less than other, else false.

## max

Computes the maximum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][121]** The array to iterate over.

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

*   `array` **[Array][121]** 

### Examples

```javascript
mean([4, 2, 8, 6]);
// => 5
```

Returns **[number][120]** Returns the mean.

## min

Computes the minimum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][121]** The array to iterate over.

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

*   `multiplier` **[number][120]** 
*   `multiplicand` **[number][120]** 

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][120]** Returns the product

## noop

This function do nothing.

### Examples

```javascript
noop();
// => undefined
```

## nth

Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.

### Parameters

*   `array` **[Array][121]** The array to query.
*   `index` **[number][120]** The index of the element to return. (optional, default `0`)

### Examples

```javascript
nth(['a', 'b', 'c', 'd'], 1);
// => b

nth(['a', 'b', 'c', 'd'], -2);
// => c
```

Returns **any** Returns the nth element of `array`.

## partition

Splits a collection into two by callback.

### Parameters

*   `collection` **([Array][121] | [object][124])** The collection to iterate over.
*   `predicate` **[Function][122]** The function invoked per iteration.

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

Returns **[Array][121]** Returns the array of grouped elements.

## reverse

Reverses `array` so that the first element becomes the last, the second element becomes the second to last, and so on.
**Note:** This method mutates `array` and is based on [Array#reverse][125].

### Parameters

*   `array` **[Array][121]** The array to modify.

### Examples

```javascript
reverse([1, 2, 3]);
// => true
```

Returns **[Array][121]** Returns `array`.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][121] | [Object][124] | [string][126])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][120]** 

## stubArray

This method returns a new empty array.

### Examples

```javascript
stubArray();
// => []
```

Returns **[Array][121]** Returns the new empty array

## stubFalse

This method returns `false`.

### Examples

```javascript
stubFalse();
// => false
```

Returns **[boolean][123]** 

## stubObject

This method returns a new empty object.

### Examples

```javascript
stubObject();
// => {}
```

Returns **[Object][124]** Returns the new empty object

## stubString

This method returns an empty string.

### Examples

```javascript
stubString();
// => ''
```

Returns **[string][126]** Returns the empty string

## stubTrue

This method returns `true`.

### Examples

```javascript
stubTrue();
// => true
```

Returns **[boolean][123]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][120]** 
*   `subtrahend` **[number][120]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][120]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][121]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][120]** The sum

## tail

Gets all but the first element of `array`.

### Parameters

*   `array` **[Array][121]** The array to query

### Examples

```javascript
tail([1, 2, 3]);
// => [2, 3]
```

Returns **[Array][121]** Returns the slice of `array`.

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][121]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][121]** 

## upperFirst

Converts the first character of `string` to upper case.

### Parameters

*   `string` **[string][126]** The string to convert. (optional, default `''`)

### Examples

```javascript
upperFirst('fred');
// => 'Fred'

upperFirst('FRED');
// => 'FRED'
```

Returns **[string][126]** Returns the converted string.

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #chunk

[5]: #parameters-1

[6]: #examples-1

[7]: #constant

[8]: #parameters-2

[9]: #examples-2

[10]: #defaultto

[11]: #parameters-3

[12]: #examples-3

[13]: #divide

[14]: #parameters-4

[15]: #examples-4

[16]: #drop

[17]: #parameters-5

[18]: #examples-5

[19]: #dropright

[20]: #parameters-6

[21]: #examples-6

[22]: #fill

[23]: #parameters-7

[24]: #gt

[25]: #parameters-8

[26]: #examples-7

[27]: #head

[28]: #parameters-9

[29]: #examples-8

[30]: #identity

[31]: #parameters-10

[32]: #examples-9

[33]: #initial

[34]: #parameters-11

[35]: #examples-10

[36]: #isarray

[37]: #parameters-12

[38]: #examples-11

[39]: #ismap

[40]: #parameters-13

[41]: #examples-12

[42]: #isnan

[43]: #parameters-14

[44]: #examples-13

[45]: #isnil

[46]: #parameters-15

[47]: #examples-14

[48]: #isnull

[49]: #parameters-16

[50]: #examples-15

[51]: #isnumber

[52]: #parameters-17

[53]: #examples-16

[54]: #isobjectlike

[55]: #parameters-18

[56]: #examples-17

[57]: #isstring

[58]: #parameters-19

[59]: #examples-18

[60]: #isundefined

[61]: #parameters-20

[62]: #examples-19

[63]: #last

[64]: #parameters-21

[65]: #examples-20

[66]: #lt

[67]: #parameters-22

[68]: #examples-21

[69]: #max

[70]: #parameters-23

[71]: #examples-22

[72]: #mean

[73]: #parameters-24

[74]: #examples-23

[75]: #min

[76]: #parameters-25

[77]: #examples-24

[78]: #multiply

[79]: #parameters-26

[80]: #examples-25

[81]: #noop

[82]: #examples-26

[83]: #nth

[84]: #parameters-27

[85]: #examples-27

[86]: #partition

[87]: #parameters-28

[88]: #examples-28

[89]: #reverse

[90]: #parameters-29

[91]: #examples-29

[92]: #size

[93]: #parameters-30

[94]: #examples-30

[95]: #stubarray

[96]: #examples-31

[97]: #stubfalse

[98]: #examples-32

[99]: #stubobject

[100]: #examples-33

[101]: #stubstring

[102]: #examples-34

[103]: #stubtrue

[104]: #examples-35

[105]: #subtract

[106]: #parameters-31

[107]: #examples-36

[108]: #sum

[109]: #parameters-32

[110]: #examples-37

[111]: #tail

[112]: #parameters-33

[113]: #examples-38

[114]: #uniq

[115]: #parameters-34

[116]: #examples-39

[117]: #upperfirst

[118]: #parameters-35

[119]: #examples-40

[120]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[121]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[122]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[123]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[124]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[125]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

[126]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
