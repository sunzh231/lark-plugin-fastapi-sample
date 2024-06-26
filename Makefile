# Makefile

.PHONY: init

init:
	@poetry install
	@bun install

dev:
	@nf start

prod:
	@bun run build
	@poetry run uvicorn main:app --host 0.0.0.0
