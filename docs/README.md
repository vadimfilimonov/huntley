### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [head][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [identity][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [isNull][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [last][13]
    *   [Parameters][14]
    *   [Examples][15]
*   [lt][16]
    *   [Parameters][17]
    *   [Examples][18]
*   [noop][19]
    *   [Examples][20]
*   [size][21]
    *   [Parameters][22]
    *   [Examples][23]
*   [subtract][24]
    *   [Parameters][25]
    *   [Examples][26]
*   [sum][27]
    *   [Parameters][28]
    *   [Examples][29]
*   [uniq][30]
    *   [Parameters][31]
    *   [Examples][32]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][33]** 
*   `addend` **[number][33]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][33]** The total

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][34]** 

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

Returns **[boolean][35]** Returns true if value is null, else false.

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][34]** 

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

* lt(3, 1);
// => false
```

Returns **[boolean][35]** Returns true if value is less than other, else false.

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

*   `collection` **([Array][34] | [Object][36] | [string][37])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][33]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][33]** 
*   `subtrahend` **[number][33]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][33]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][34]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][33]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][34]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][34]** 

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #head

[5]: #parameters-1

[6]: #examples-1

[7]: #identity

[8]: #parameters-2

[9]: #examples-2

[10]: #isnull

[11]: #parameters-3

[12]: #examples-3

[13]: #last

[14]: #parameters-4

[15]: #examples-4

[16]: #lt

[17]: #parameters-5

[18]: #examples-5

[19]: #noop

[20]: #examples-6

[21]: #size

[22]: #parameters-6

[23]: #examples-7

[24]: #subtract

[25]: #parameters-7

[26]: #examples-8

[27]: #sum

[28]: #parameters-8

[29]: #examples-9

[30]: #uniq

[31]: #parameters-9

[32]: #examples-10

[33]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[34]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[35]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[36]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
