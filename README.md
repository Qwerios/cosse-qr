# Cosse Camper Adventure QR generator

Purpose built QR code generator for my friends at [Cosse Camper Adventure](https://www.cossecamperadventure.com)

## Requirements

Node.js 24 (the current LTS line) or newer, as pinned in `.nvmrc` and enforced by the
`engines` field in `package.json`. With nvm installed, run `nvm use` in the project root.

## Development

This app is built using React and Vite.
You can run `npm run dev` to serve a development version with hot reload.
A deployable build can be made using `npm run build`.

## Deploying

This tool is hosted using Github pages and deployment is done manually by running `npm run deploy`.
The run script will build and automatically push to the `gh-pages` branch.
