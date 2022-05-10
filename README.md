<p align="center">
  <a href="https://svelte.dev" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" width="100" alt="Svelte Logo" /></a>
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Svelte NestJS Typescript Monorepo Starter

## Description

* [NPM](https://docs.npmjs.com/cli/v7/using-npm/workspaces) workspaces to manage monorepo
* Full Stack: Front End, Server, Common module packages   
* Front End package: [Svelte](https://svelte.dev/docs) | [rollup.js](https://rollupjs.org/guide/en/)
* Server package: [NestJS](https://docs.nestjs.com) | [nest-cli](https://docs.nestjs.com/cli/overview)
* Common package: common code used in both Front End and Server

## TODO

- [X] Configure NPM workspaces
- [X] Configure .gitignore
- [X] Configure global tsconfig related to apps and libs
- [X] Create npm scripts
- [X] Configure ESLint
- [ ] Script to create binaries from apps

## Prerequisites

Suggest to install [nest-cli](https://docs.nestjs.com/cli/overview) globally in dev environment.

## Quick start

```bash

# 1. Clone the repository
git clone https://github.com/DhivinX/monorepo-svelte-nestjs.git project-name

# 2. Install the project and build packages in libs folder
npm i

# 3. Enter your newly-cloned folder
cd project-name

# 6. Dev: Run frontend with hot reload 
npm run web:dev

# 7. Dev: Run backend with hot reload 
npm run server:dev

```

## Top-Level Scripts
 
* `web:dev` - run frontend with hot reload
* `server:dev` - run backend with hot reload
* `libs:build` - build packages in `libs` folder
* `libs:clean` - clean packages in `libs` folder
* `libs:lint` - lint packages in `libs` folder
* `apps:build` - build packages in `apps` folder
* `apps:clean` - clean packages in `apps` folder
* `apps:lint` - lint packages in `apps` folder

## Visual Studio Code extensions

```json

{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "eamodio.gitlens",
    "wayou.vscode-todo-highlight",
    "syler.sass-indented",
    "editorconfig.editorconfig",
    "eg2.vscode-npm-script",
    "platformio.platformio-ide",
    "ms-python.python",
    "tomoki1207.pdf",
    "visualstudioexptteam.vscodeintellicode",
    "pkief.material-icon-theme",
    "svelte.svelte-vscode",
  ]
}

```

### Required

* `svelte.svelte-vscode` - Svelte for VS Code.
* `syler.sass-indented` - Sass syntax highlighting.
* `dbaeumer.vscode-eslint` - VS Code ESLint extension.
* `editorconfig.editorconfig` - EditorConfig for VS Code.
* `visualstudioexptteam.vscodeintellicode` - IntelliCode
* `eamodio.gitlens` - GitLens - Git supercharged.

### Optional

* `platformio.platformio-ide` - PlatformIO IDE. Collaborative platform for embedded development.
* `ms-python.python` - Python extension.
* `wayou.vscode-todo-highlight` - TODO Highlight.
* `eg2.vscode-npm-script` - Supports running npm scripts defined in the package.json file.
* `tomoki1207.pdf` - Display pdf in VS Code.
* `pkief.material-icon-theme` - Material Icon Theme in VS Code.

## Visual Studio Code settings

Disables top-level scripts for packages from the npm script panel.

```json

{
  "npm.exclude": [
    "**/packages/**",
    "**/apps/**",
  ]
}

```

## Enhancements and Bug Reports

If you find a bug, or have an enhancement in mind please post [issues](https://github.com/DhivinX/monorepo-svelte-nestjs/issues) on GitHub.

## License

MIT
