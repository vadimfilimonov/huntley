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
*   [uniq][15]
    *   [Parameters][16]
    *   [Examples][17]

## add

Adds two numbers.

### Parameters

*   `augend` **[number][18]** 
*   `addend` **[number][18]** 

### Examples

```javascript
add(6, 4);
// => 10
```

Returns **[number][18]** The total

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][19]** 

### Examples

```javascript
head([1, 2, 3]);
// => 1
```

Returns **any** 

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][19]** 

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

*   `collection` **([Array][19] | [Object][20] | [string][21])** 

### Examples

```javascript
size([1, 2, 3]);
// => 3

size({ foo: 'bar', baz: false });
// => 2

size('cobbles');
// => 7
```

Returns **[number][18]** 

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][19]** 

### Examples

```javascript
uniq([2, 1, 2]);
// => [2, 1]
```

Returns **[Array][19]** 

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

[15]: #uniq

[16]: #parameters-4

[17]: #examples-5

[18]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
