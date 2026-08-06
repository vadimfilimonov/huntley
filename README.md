# Huntley

[![Linter](https://github.com/VadimFilimonov/huntley/actions/workflows/linter.yml/badge.svg)](https://github.com/VadimFilimonov/huntley/actions/workflows/linter.yml)
[![Tests](https://github.com/VadimFilimonov/huntley/actions/workflows/tests.yml/badge.svg)](https://github.com/VadimFilimonov/huntley/actions/workflows/tests.yml)

A small JavaScript utility library with a simple, readable API.

> **Experimental:** The public API and behavior may change in future releases.

## Installation

```bash
npm install huntley
```

## Usage

```js
import { chunk, upperFirst } from 'huntley';

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

upperFirst('hello');
// => 'Hello'
```

See the [getting started guide](./docs/get-started.md) and [API documentation](./docs/README.md) for more examples.

## Development

```bash
make install
make lint
make test
```

Use `make help` to see all available commands.

## License

ISC
