# Makefile

.PHONY: init dev

init:
	@poetry install
	@bun install

dev-frontend:
	@bun dev

dev:
	@nf start

build-frontend:
	@bun run build

deploy: build-frontend
	@git push -f dokku master
