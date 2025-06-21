# ts-configs TODO

## Features

1. Eslint Config - Once done, MVP is ready
2. Prettier Config
3. Typescript Config
4. Commitlint Config
5. Lint-staged Config
6. Simple-git-commits Config (possible)

## Stories

### 1. Project Setup

- a. Set up monorepo structure
  - a1. Tsconfig
  - a2. basic package.json
  - a3. vitest setup
  - a4. Community health files [open source guide](https://opensource.guide)
- b. Create local dev CI pipeline
  - b1. Commit linting - (Commitizen, Commitlint)
  - b2. Code / config linting - (Eslint)
  - b3. Code / config formatting - (Prettier)
  - b4. Build code
  - b5. Unit test built code
  - b6. Changelogen?
  - b7. Lint staged / simple-git-hooks
- c. Create github actions dev pipeline
  - c1. Lint/format
  - c2. Build
  - c3. Unit test
- d. Create github issue templates
- e. Create actions CodeQL pipeline
- f. Create github actions release pipeline
