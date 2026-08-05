help:
	@echo "Available commands:"
	@echo "  make install     Install dependencies"
	@echo "  make lint        Run ESLint"
	@echo "  make test        Run tests"
	@echo "  make test-watch  Run tests in watch mode"

install:
	npm install

lint:
	npm run lint

test:
	npm run test

test-watch:
	npm run test:watch

.PHONY: help install lint test test-watch
