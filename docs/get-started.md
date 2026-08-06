# Get started

Huntley is an experimental JavaScript utility library. Start with a small set of functions and verify the behavior you need before using it in a larger application.

## Install

Install the package with npm:

```bash
npm install huntley
```

## Import functions

Use named imports when you need specific functions:

```js
import { chunk, divide, upperFirst } from 'huntley';

const groups = chunk(['a', 'b', 'c', 'd'], 2);
const result = divide(10, 2);
const title = upperFirst('hello');
```

You can also use the default export:

```js
import utils from 'huntley';

const firstItem = utils.head([10, 20, 30]);
```

## Choose a function

The full API reference is available in the [documentation](./README.md). Each function page contains its parameters and examples.

For a first experiment, try a small collection operation:

```js
import { filter } from 'huntley';

const evenNumbers = filter([1, 2, 3, 4], (value) => value % 2 === 0);

// => [2, 4]
```

## Check your usage

The library is experimental, so check edge cases that matter to your code, especially empty collections and `null` or `undefined` values. Keep the input and output behavior covered by your own tests.

## Local development

If you are working on the repository itself, install dependencies and run the checks:

```bash
make install
make lint
make test
```

Use `make help` to see all available development commands.
