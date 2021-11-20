install:
	npm install

lint:
	npm run lint

test:
	npm run test

test-watch:
	npm run test:watch

docs:
	mkdir -p docs
	npm run documentation -- build ./src/*.js -f md > docs/README.md

.PHONY: test docs
