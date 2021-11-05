install:
	npm install

lint:
	npm run lint

test:
	npm run test

docs:
	mkdir -p docs
	npm run documentation -- build ./src/*.js -f md > docs/README.md

.PHONY: test docs
