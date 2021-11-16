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
*   [last][10]
    *   [Parameters][11]
    *   [Examples][12]
*   [noop][13]
    *   [Examples][14]
*   [size][15]
    *   [Parameters][16]
    *   [Examples][17]
*   [subtract][18]
    *   [Parameters][19]
    *   [Examples][20]
*   [sum][21]
    *   [Parameters][22]
    *   [Examples][23]
*   [uniq][24]
    *   [Parameters][25]
    *   [Examples][26]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][27]** 
*   `addend` **[number][27]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][27]** The total

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][28]** 

### Examples

```javascript
head([1, 2, 3]);
// => 1
```

Returns **any** 

## identity

This method returns the first argument it receives..

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

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][28]** 

### Examples

```javascript
last([1, 2, 3]);
// => 3
```

Returns **any** 

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

*   `collection` **([Array][28] | [Object][29] | [string][30])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][27]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][27]** 
*   `subtrahend` **[number][27]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][27]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][28]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][27]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][28]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][28]** 

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #head

[5]: #parameters-1

[6]: #examples-1

[7]: #identity

[8]: #parameters-2

[9]: #examples-2

[10]: #last

[11]: #parameters-3

[12]: #examples-3

[13]: #noop

[14]: #examples-4

[15]: #size

[16]: #parameters-4

[17]: #examples-5

[18]: #subtract

[19]: #parameters-5

[20]: #examples-6

[21]: #sum

[22]: #parameters-6

[23]: #examples-7

[24]: #uniq

[25]: #parameters-7

[26]: #examples-8

[27]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[28]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[29]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
