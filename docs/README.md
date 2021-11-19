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
*   [last][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [lt][19]
    *   [Parameters][20]
    *   [Examples][21]
*   [noop][22]
    *   [Examples][23]
*   [size][24]
    *   [Parameters][25]
    *   [Examples][26]
*   [subtract][27]
    *   [Parameters][28]
    *   [Examples][29]
*   [sum][30]
    *   [Parameters][31]
    *   [Examples][32]
*   [uniq][33]
    *   [Parameters][34]
    *   [Examples][35]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][36]** 
*   `addend` **[number][36]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][36]** The total

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

Returns **[boolean][37]** Returns true if value is greater than other, else false.

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][38]** 

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

Check is value is null

### Parameters

*   `value` **any** The value to check.

### Examples

```javascript
isNull(null);
// => true
```

Returns **[boolean][37]** Returns true if value is null, else false.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][38]** 

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

Returns **[boolean][37]** Returns true if value is less than other, else false.

## noop

This function do nothing.

### Examples

```javascript
noop();
// => undefined
```

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][38] | [Object][39] | [string][40])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][36]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][36]** 
*   `subtrahend` **[number][36]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][36]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][38]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][36]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][38]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][38]** 

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

[16]: #last

[17]: #parameters-5

[18]: #examples-5

[19]: #lt

[20]: #parameters-6

[21]: #examples-6

[22]: #noop

[23]: #examples-7

[24]: #size

[25]: #parameters-7

[26]: #examples-8

[27]: #subtract

[28]: #parameters-8

[29]: #examples-9

[30]: #sum

[31]: #parameters-9

[32]: #examples-10

[33]: #uniq

[34]: #parameters-10

[35]: #examples-11

[36]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[38]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[39]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[40]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
