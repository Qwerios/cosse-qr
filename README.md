# Cosse Camper Adventure QR generator

Purpose built QR code generator for my friends at [Cosse Camper Adventure](https://www.cossecamperadventure.com)

## Requirements

Node.js 24 (the current LTS line) or newer, as pinned in `.nvmrc` and enforced by the
`engines` field in `package.json`. With nvm installed, run `nvm use` in the project root.

## Development

This app is built using React, Vite and Jotai.
You can run `npm run dev` to serve a development version with hot reload.
A deployable build can be made using `npm run build`.

## Code quality

Linting is done with [oxlint](https://oxc.rs) and formatting with oxfmt, both
configured in `.oxlintrc.json` and `.oxfmtrc.json`.

- `npm run lint` reports problems, `npm run lint:fix` applies what it can
- `npm run format` rewrites files, `npm run format:check` only reports

A husky `pre-commit` hook runs both over staged files via lint-staged, and a
`commit-msg` hook runs commitlint so every message follows
[Conventional Commits](https://www.conventionalcommits.org/). The hooks install
themselves through the `prepare` script on `npm install`.

## Deploying

This tool is hosted using Github pages and deployment is done manually by running `npm run deploy`.
The run script will build and automatically push to the `gh-pages` branch.
