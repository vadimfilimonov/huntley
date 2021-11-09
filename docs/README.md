### Table of Contents

*   [add][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [head][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [last][7]
    *   [Parameters][8]
    *   [Examples][9]
*   [noop][10]
    *   [Examples][11]
*   [size][12]
    *   [Parameters][13]
    *   [Examples][14]
*   [subtract][15]
    *   [Parameters][16]
    *   [Examples][17]
*   [sum][18]
    *   [Parameters][19]
    *   [Examples][20]
*   [uniq][21]
    *   [Parameters][22]
    *   [Examples][23]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][24]** 
*   `addend` **[number][24]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][24]** The total

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][25]** 

### Examples

```javascript
head([1, 2, 3]);
// => 1
```

Returns **any** 

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][25]** 

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

*   `collection` **([Array][25] | [Object][26] | [string][27])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][24]** 

## subtract

Subtract two numbers.

### Parameters

*   `minuend` **[number][24]** 
*   `subtrahend` **[number][24]** 

### Examples

```javascript
subtract(6, 4);
// => 2
```

Returns **[number][24]** The difference

## sum

Computes the sum of the values in array.

### Parameters

*   `array` **[Array][25]** 

### Examples

```javascript
sum([4, 2, 8, 6]);
// => 20
```

Returns **[number][24]** The sum

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][25]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][25]** 

[1]: #add

[2]: #parameters

[3]: #examples

[4]: #head

[5]: #parameters-1

[6]: #examples-1

[7]: #last

[8]: #parameters-2

[9]: #examples-2

[10]: #noop

[11]: #examples-3

[12]: #size

[13]: #parameters-3

[14]: #examples-4

[15]: #subtract

[16]: #parameters-4

[17]: #examples-5

[18]: #sum

[19]: #parameters-5

[20]: #examples-6

[21]: #uniq

[22]: #parameters-6

[23]: #examples-7

[24]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[25]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[26]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[27]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
