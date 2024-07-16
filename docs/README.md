### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [chunk][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [compact][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [concat][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [constant][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [defaultTo][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [divide][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [drop][22]
    *   [Parameters][23]
    *   [Examples][24]
*   [dropRight][25]
    *   [Parameters][26]
    *   [Examples][27]
*   [fill][28]
    *   [Parameters][29]
*   [filter][30]
    *   [Parameters][31]
    *   [Examples][32]
*   [flatten][33]
    *   [Parameters][34]
    *   [Examples][35]
*   [flattenDepth][36]
    *   [Parameters][37]
    *   [Examples][38]
*   [forEach][39]
    *   [Parameters][40]
    *   [Examples][41]
*   [gt][42]
    *   [Parameters][43]
    *   [Examples][44]
*   [head][45]
    *   [Parameters][46]
    *   [Examples][47]
*   [identity][48]
    *   [Parameters][49]
    *   [Examples][50]
*   [initial][51]
    *   [Parameters][52]
    *   [Examples][53]
*   [invert][54]
    *   [Parameters][55]
    *   [Examples][56]
*   [isArray][57]
    *   [Parameters][58]
    *   [Examples][59]
*   [isFunction][60]
    *   [Parameters][61]
    *   [Examples][62]
*   [isMap][63]
    *   [Parameters][64]
    *   [Examples][65]
*   [isNaN][66]
    *   [Parameters][67]
    *   [Examples][68]
*   [isNil][69]
    *   [Parameters][70]
    *   [Examples][71]
*   [isNull][72]
    *   [Parameters][73]
    *   [Examples][74]
*   [isNumber][75]
    *   [Parameters][76]
    *   [Examples][77]
*   [isObjectLike][78]
    *   [Parameters][79]
    *   [Examples][80]
*   [isString][81]
    *   [Parameters][82]
    *   [Examples][83]
*   [isUndefined][84]
    *   [Parameters][85]
    *   [Examples][86]
*   [join][87]
    *   [Parameters][88]
    *   [Examples][89]
*   [last][90]
    *   [Parameters][91]
    *   [Examples][92]
*   [lt][93]
    *   [Parameters][94]
    *   [Examples][95]
*   [max][96]
    *   [Parameters][97]
    *   [Examples][98]
*   [mean][99]
    *   [Parameters][100]
    *   [Examples][101]
*   [min][102]
    *   [Parameters][103]
    *   [Examples][104]
*   [multiply][105]
    *   [Parameters][106]
    *   [Examples][107]
*   [noop][108]
    *   [Examples][109]
*   [nth][110]
    *   [Parameters][111]
    *   [Examples][112]
*   [partition][113]
    *   [Parameters][114]
    *   [Examples][115]
*   [remove][116]
    *   [Parameters][117]
    *   [Examples][118]
*   [reverse][119]
    *   [Parameters][120]
    *   [Examples][121]
*   [shuffle][122]
    *   [Parameters][123]
    *   [Examples][124]
*   [size][125]
    *   [Parameters][126]
    *   [Examples][127]
*   [stubArray][128]
    *   [Examples][129]
*   [stubFalse][130]
    *   [Examples][131]
*   [stubObject][132]
    *   [Examples][133]
*   [stubString][134]
    *   [Examples][135]
*   [stubTrue][136]
    *   [Examples][137]
*   [subtract][138]
    *   [Parameters][139]
    *   [Examples][140]
*   [sum][141]
    *   [Parameters][142]
    *   [Examples][143]
*   [tail][144]
    *   [Parameters][145]
    *   [Examples][146]
*   [take][147]
    *   [Parameters][148]
    *   [Examples][149]
*   [takeRight][150]
    *   [Parameters][151]
    *   [Examples][152]
*   [takeWhile][153]
    *   [Parameters][154]
*   [unary][155]
    *   [Parameters][156]
    *   [Examples][157]
*   [uniq][158]
    *   [Parameters][159]
    *   [Examples][160]
*   [upperFirst][161]
    *   [Parameters][162]
    *   [Examples][163]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][164]** The first number in an addition.
*   `addend` **[number][164]** The second number in an addition.

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][164]** Returns the total.

## chunk

Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.

### Parameters

*   `array` **[Array][165]** The array to process.
*   `size` **[number][164]** The length of each chunk. (optional, default `1`)

### Examples

```javascript
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

Returns **[Array][165]** Returns the new array of chunks.

## compact

Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.

### Parameters

*   `array` **[Array][165]** The array to compact

### Examples

```javascript
compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

Returns **[Array][165]** Returns the new array of filtered values

## concat

Creates a new array concatenating `array` with any additional arrays and/or values.

### Parameters

*   `array` **[Array][165]** The array to concatenate.
*   `values` **...any** The values to concatenate.

### Examples

```javascript
const array = [1];
const other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

Returns **[Array][165]** Returns the new concatenated array.

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

Returns **[Function][166]** Returns the new constant function.

## defaultTo

Checks `value` to determine whether a default value should be returned in its place.
The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.

### Parameters

*   `value` **any**&#x20;
*   `defaultValue` **any**&#x20;

### Examples

```javascript
defaultTo(1, 10);
// => 1

defaultTo(undefined, 10);
// => 10
```

Returns **[boolean][167]**&#x20;

## divide

Divide two numbers.

### Parameters

*   `dividend` **[number][164]**&#x20;
*   `divisor` **[number][164]**&#x20;

### Examples

```javascript
divide(6, 4);
// => 1.5
```

Returns **[number][164]** Returns the quotient

## drop

Creates a slice of `array` with `n` elements dropped from the beginning.

### Parameters

*   `array` **[Array][165]** The array to query.
*   `n` **[number][164]** The number of elements to drop. (optional, default `1`)

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

Returns **[Array][165]** Returns the slice of `array`.

## dropRight

Creates a slice of `array` with `n` elements dropped from the end.

### Parameters

*   `array` **[Array][165]** The array to query.
*   `n` **[number][164]** The number of elements to drop. (optional, default `1`)

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

Returns **[Array][165]** Returns the slice of `array`.

## fill

Fills elements of `array` with `value` from `start` up to, but not including, `end`.

### Parameters

*   `array` **[Array][165]** The array to fill.
*   `value` **any** The value to fill `array` with.
*   `start` **[number][164]** The start position. (optional, default `0`)
*   `end` **[number][164]** The end position. (optional, default `array.length`)

Returns **[Array][165]** Returns `array`.

## filter

Iterates over elements of `collection`, returning an array of all elements `predicate` returns truthy for. The predicate is invoked with three arguments: (value, index, collection).

### Parameters

*   `collection` **[Array][165]** The collection to iterate over.
*   `predicate` **[Function][166]** The function invoked per iteration.

### Examples

```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, (o) => !o.active);
// => objects for ['fred']
```

Returns **[Array][165]** Returns the new filtered array.

## flatten

Flattens `array` a single level deep

### Parameters

*   `array` **[Array][165]** The array to flatten

### Examples

```javascript
flatten([1, [2, [3, [4]], 5]]);
=> [1, 2, [3, [4]], 5]
```

Returns **[Array][165]** Returns the new flattened array

## flattenDepth

Recursively flatten `array` up to `depth` times.

### Parameters

*   `array` **[Array][165]** The array to flatten.
*   `depth` **[number][164]** The maximum recursion depth. (optional, default `1`)

### Examples

```javascript
flattenDepth([1, [2, [3, [4]], 5]], 2);
=> [1, 2, 3, [4], 5]
```

Returns **[Array][165]** Returns the new flattened array.

## forEach

Iterates over elements of `collection` and invokes `iteratee` for each element.

### Parameters

*   `collection` **[Array][165]** The collection to iterate over.
*   `iteratee` **[Function][166]** The function invoked per iteration. (optional, default `noop`)

### Examples

```javascript
forEach([1, 2]);
// => 1
```

Returns **any** Returns collection.

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

Returns **[boolean][167]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][165]**&#x20;

### Examples

```javascript
head([1, 2, 3]);
// => 1
```

Returns **any**&#x20;

## identity

This method returns the first argument it receives.

### Parameters

*   `value` **any**&#x20;

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

Returns **any**&#x20;

## initial

Gets all but the last element of `array`.

### Parameters

*   `array` **[Array][165]** The array to query.

### Examples

```javascript
initial([1, 2, 3]);
// => [1, 2]
```

Returns **[Array][165]** Returns the slice of `array`.

## invert

Creates an object composed of the inverted keys and values of `object`. If `object` contains duplicate values, subsequent values overwrite property assignments of previous values.

### Parameters

*   `object` **[Object][168]** The object to invert.

### Examples

```javascript
invert({ a: 1, b: 2, c: 1 });
// => { 1: 'c', 2: 'b' }
```

Returns **[Object][168]** Returns the new inverted object.

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

Returns **[boolean][167]** Returns `true` if `value` is an array, else `false`.

## isFunction

Checks if `value` is classified as a `Function` object.

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isFunction(() => {})
// => true

isFunction(async () => {})
// => true

isFunction(Math.round)
// => true

isFunction(/abc/)
// => false
```

Returns **[boolean][167]** Returns `true` if `value` is a function, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is map, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is a `NaN`, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is nullish, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is `null`, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is a number, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is object-like, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is a string, else `false`.

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

Returns **[boolean][167]** Returns `true` if `value` is `undefined`, else `false`.

## join

Converts all elements in `array` into a string separated by `separator`

### Parameters

*   `array` **[Array][165]** The array to convert.
*   `separator` **[string][169]** The element separator. (optional, default `','`)

### Examples

```javascript
join(['a', 'b', 'c'], '~');
// => a~b~c
```

Returns **[string][169]** Returns the joined string.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][165]**&#x20;

### Examples

```javascript
last([1, 2, 3]);
// => 3
```

Returns **any**&#x20;

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

Returns **[boolean][167]** Returns true if value is less than other, else false.

## max

Computes the maximum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][165]** The array to iterate over.

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

*   `array` **[Array][165]**&#x20;

### Examples

```javascript
mean([4, 2, 8, 6]);
// => 5
```

Returns **[number][164]** Returns the mean.

## min

Computes the minimum value of `array`. If `array` is empty or falsey, `undefined` is returned.

### Parameters

*   `array` **[Array][165]** The array to iterate over.

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

*   `multiplier` **[number][164]**&#x20;
*   `multiplicand` **[number][164]**&#x20;

### Examples

```javascript
multiply(6, 4);
// => 24
```

Returns **[number][164]** Returns the product

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

*   `array` **[Array][165]** The array to query.
*   `index` **[number][164]** The index of the element to return. (optional, default `0`)

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

*   `collection` **([Array][165] | [object][168])** The collection to iterate over.
*   `predicate` **[Function][166]** The function invoked per iteration.

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

Returns **[Array][165]** Returns the array of grouped elements.

## remove

Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

### Parameters

*   `array` **[Array][165]** The array to modify.
*   `predicate` **[Function][166]** The function invoked per iteration.

### Examples

```javascript
const array = [1, 2, 3, 4];
const evens = remove(array, (n) => n % 2 === 0);

console.log(array);
// => [1, 3];

console.log(evens);
// => [2, 4];
```

Returns **[Array][165]** Returns the new array of removed elements.

## reverse

Reverses `array` so that the first element becomes the last, the second element becomes the second to last, and so on.
**Note:** This method mutates `array` and is based on [Array#reverse][170].

### Parameters

*   `array` **[Array][165]** The array to modify.

### Examples

```javascript
reverse([1, 2, 3]);
// => true
```

Returns **[Array][165]** Returns `array`.

## shuffle

Creates an array of shuffled values, using a version of the `Fisher-Yates shuffle`.

### Parameters

*   `collection` **([Array][165] | [Object][168])** The collection to shuffle.

### Examples

```javascript
shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

Returns **[Array][165]** Returns the new shuffled array.

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][165] | [Object][168] | [string][169])**&#x20;

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][164]**&#x20;

## stubArray

This method returns a new empty array.

### Examples

```javascript
stubArray();
// => []
```

Returns **[Array][165]** Returns the new empty array

## stubFalse

This method returns `false`.

### Examples

```javascript
stubFalse();
// => false
```

Returns **[boolean][167]**&#x20;

## stubObject

This method returns a new empty object.

### Examples

```javascript
stubObject();
// => {}
```

Returns **[Object][168]** Returns the new empty object

## stubString

This method returns an empty string.

### Examples

```javascript
stubString();
// => ''
```

Returns **[string][169]** Returns the empty string

## stubTrue

This method returns `true`.

### Examples

```javascript
stubTrue();
// => true
```

Returns **[boolean][167]**&#x20;

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][164]**&#x20;
*   `subtrahend` **[number][164]**&#x20;

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][164]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][165]**&#x20;

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][164]** The sum

## tail

Gets all but the first element of `array`.

### Parameters

*   `array` **[Array][165]** The array to query

### Examples

```javascript
tail([1, 2, 3]);
// => [2, 3]
```

Returns **[Array][165]** Returns the slice of `array`.

## take

Creates a `slice` of array with `n` elements taken from the beginning.

### Parameters

*   `array` **[Array][165]** The array to query.
*   `n` **[number][164]** The number of elements to take. (optional, default `1`)

### Examples

```javascript
take([1, 2, 3]);
// => [1]

take([1, 2, 3], 2);
// => [1, 2]

take([1, 2, 3], 5);
// => [1, 2, 3]

take([1, 2, 3], 0);
// => []
```

Returns **[Array][165]** Returns the slice of `array`.

## takeRight

Creates a slice of `array` with `n` elements taken from the end.

### Parameters

*   `array` **[Array][165]** The array to query.
*   `n` **[number][164]** The number of elements to take. (optional, default `1`)

### Examples

```javascript
takeRight([1, 2, 3]);
// => [3]

takeRight([1, 2, 3], 2);
// => [2, 3]

takeRight([1, 2, 3], 5);
// => [1, 2, 3]

takeRight([1, 2, 3], 0);
// => []
```

Returns **[Array][165]** Returns the slice of `array`.

## takeWhile

Creates a `slice` of array with `n` elements taken from the beginning.

### Parameters

*   `array` **[Array][165]** The array to query.
*   `predicate` **[Function][166]** The function invoked per iteration.

Returns **[Array][165]** Returns the slice of `array`.

## unary

Creates a function that accepts up to one argument, ignoring any additional arguments.

### Parameters

*   `func` **[Function][166]** The function to cap arguments for.

### Examples

```javascript
['6', '8', '10'].map(unary(parseInt));
// => [6, 8, 10]
```

Returns **[Function][166]** Returns the new capped function.

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][165]**&#x20;

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][165]**&#x20;

## upperFirst

Converts the first character of `string` to upper case.

### Parameters

*   `string` **[string][169]** The string to convert. (optional, default `''`)

### Examples

```javascript
upperFirst('fred');
// => 'Fred'

upperFirst('FRED');
// => 'FRED'
```

Returns **[string][169]** Returns the converted string.

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #chunk

[5]: #parameters-1

[6]: #examples-1

[7]: #compact

[8]: #parameters-2

[9]: #examples-2

[10]: #concat

[11]: #parameters-3

[12]: #examples-3

[13]: #constant

[14]: #parameters-4

[15]: #examples-4

[16]: #defaultto

[17]: #parameters-5

[18]: #examples-5

[19]: #divide

[20]: #parameters-6

[21]: #examples-6

[22]: #drop

[23]: #parameters-7

[24]: #examples-7

[25]: #dropright

[26]: #parameters-8

[27]: #examples-8

[28]: #fill

[29]: #parameters-9

[30]: #filter

[31]: #parameters-10

[32]: #examples-9

[33]: #flatten

[34]: #parameters-11

[35]: #examples-10

[36]: #flattendepth

[37]: #parameters-12

[38]: #examples-11

[39]: #foreach

[40]: #parameters-13

[41]: #examples-12

[42]: #gt

[43]: #parameters-14

[44]: #examples-13

[45]: #head

[46]: #parameters-15

[47]: #examples-14

[48]: #identity

[49]: #parameters-16

[50]: #examples-15

[51]: #initial

[52]: #parameters-17

[53]: #examples-16

[54]: #invert

[55]: #parameters-18

[56]: #examples-17

[57]: #isarray

[58]: #parameters-19

[59]: #examples-18

[60]: #isfunction

[61]: #parameters-20

[62]: #examples-19

[63]: #ismap

[64]: #parameters-21

[65]: #examples-20

[66]: #isnan

[67]: #parameters-22

[68]: #examples-21

[69]: #isnil

[70]: #parameters-23

[71]: #examples-22

[72]: #isnull

[73]: #parameters-24

[74]: #examples-23

[75]: #isnumber

[76]: #parameters-25

[77]: #examples-24

[78]: #isobjectlike

[79]: #parameters-26

[80]: #examples-25

[81]: #isstring

[82]: #parameters-27

[83]: #examples-26

[84]: #isundefined

[85]: #parameters-28

[86]: #examples-27

[87]: #join

[88]: #parameters-29

[89]: #examples-28

[90]: #last

[91]: #parameters-30

[92]: #examples-29

[93]: #lt

[94]: #parameters-31

[95]: #examples-30

[96]: #max

[97]: #parameters-32

[98]: #examples-31

[99]: #mean

[100]: #parameters-33

[101]: #examples-32

[102]: #min

[103]: #parameters-34

[104]: #examples-33

[105]: #multiply

[106]: #parameters-35

[107]: #examples-34

[108]: #noop

[109]: #examples-35

[110]: #nth

[111]: #parameters-36

[112]: #examples-36

[113]: #partition

[114]: #parameters-37

[115]: #examples-37

[116]: #remove

[117]: #parameters-38

[118]: #examples-38

[119]: #reverse

[120]: #parameters-39

[121]: #examples-39

[122]: #shuffle

[123]: #parameters-40

[124]: #examples-40

[125]: #size

[126]: #parameters-41

[127]: #examples-41

[128]: #stubarray

[129]: #examples-42

[130]: #stubfalse

[131]: #examples-43

[132]: #stubobject

[133]: #examples-44

[134]: #stubstring

[135]: #examples-45

[136]: #stubtrue

[137]: #examples-46

[138]: #subtract

[139]: #parameters-42

[140]: #examples-47

[141]: #sum

[142]: #parameters-43

[143]: #examples-48

[144]: #tail

[145]: #parameters-44

[146]: #examples-49

[147]: #take

[148]: #parameters-45

[149]: #examples-50

[150]: #takeright

[151]: #parameters-46

[152]: #examples-51

[153]: #takewhile

[154]: #parameters-47

[155]: #unary

[156]: #parameters-48

[157]: #examples-52

[158]: #uniq

[159]: #parameters-49

[160]: #examples-53

[161]: #upperfirst

[162]: #parameters-50

[163]: #examples-54

[164]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[165]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[166]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[167]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[168]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[169]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[170]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
