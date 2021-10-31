install:
	npm install

lint:
	npm run lint

docs:
	mkdir -p docs
	npm run documentation -- build ./src/*.js -f md > docs/README.md

.PHONY: test docs
