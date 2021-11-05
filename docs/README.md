### Table of Contents

*   [head][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [last][4]
    *   [Parameters][5]
    *   [Examples][6]
*   [noop][7]
    *   [Examples][8]
*   [size][9]
    *   [Parameters][10]
    *   [Examples][11]
*   [uniq][12]
    *   [Parameters][13]
    *   [Examples][14]

## head

Gets the first element of array.

### Parameters

*   `array` **[Array][15]** 

### Examples

```javascript
head([1, 2, 3]);
// 1
```

Returns **any** 

## last

Gets the last element of array.

### Parameters

*   `array` **[Array][15]** 

### Examples

```javascript
last([1, 2, 3]);
// 3
```

Returns **any** 

## noop

This function do nothing.

### Examples

```javascript
noop();
// undefined
```

## size

Gets the size of collection.

### Parameters

*   `collection` **([Array][15] | [Object][16] | [string][17])** 

### Examples

```javascript
size([1, 2, 3]);
// 3
```

Returns **[number][18]** 

## uniq

Creates a duplicate-free version of an array.

### Parameters

*   `array` **[Array][15]** 

### Examples

```javascript
uniq([2, 1, 2]);
// [2, 1]
```

Returns **[Array][15]** 

[1]: #head

[2]: #parameters

[3]: #examples

[4]: #last

[5]: #parameters-1

[6]: #examples-1

[7]: #noop

[8]: #examples-2

[9]: #size

[10]: #parameters-2

[11]: #examples-3

[12]: #uniq

[13]: #parameters-3

[14]: #examples-4

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[18]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
