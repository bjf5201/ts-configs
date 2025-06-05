---
name: Bug report
about: Report non-security related bugs
title: 'bug (prod): <concise description>'
labels: bug
assignees: bjf5201
body:
- type: checkboxes
  id: bug-steps
  attributes:
    label: Follow the steps below:
    description: Check off each one once completed.
    options:
      - label: Search [repository issues](https://github.com/bjf5201/ts-configs/issues) - your bug may already be reported! Please look through current issues before submitting a new one.
        required: true
      - label: If a **development** related bug, ensure you have followed the [development documentation](https://github.com/bjf5201/ts-configs/blob/main/docs/development.md) steps correctly
        required: true
      - label: If a **production** related bug, ensure you have followed the [usage documentation](https://github.com/bjf5201/ts-configs/blob/main/README.md) steps correctly
        required: true
      - label: Fill out the information below.
        required: true
---

# Bug Report

## Steps:

Follow the steps below:

1. Search [repository issues](https://github.com/bjf5201/ts-configs/issues) - your bug may already be reported! Please look through current issues before submitting a new one.
2. If a **development** related bug, ensure you have followed the [development documentation](https://github.com/bjf5201/ts-configs/blob/main/docs/development.md) steps correctly
3. If a **production** related bug, ensure you have followed the [usage documentation](https://github.com/bjf5201/ts-configs/blob/main/README.md) steps correctly
4. Fill out the information below.

## Bug Information

### Expected Behavior
Clear and concise description of the behavior you expected.

### Current Behavior
A clear and concise description of the behavior.

### Input Code
- Include REPL or Repo link if applicable, or include code below:

```js
var your => (code) => here;
```

### Environment
Fill out your environment information below:

 - Pnpm version: [e.g. 10.11.0, 10.0.0-beta.34]
 - Node/npm version: [e.g. Node 8/npm 5]
 - ts-configs version [e.g. 1.0.1]
 - Device: [e.g. iPhone6]
 - Browser [e.g. stock browser, safari]
 - OS: [e.g. OSX 10.13.4, Windows 10]
 - Monorepo: [e.g. yes/no/Lerna/Turbo]

### Possible Solution
<!--- Only if you have suggestions on a fix for the bug -->

### Additional context/Screenshots
Add any other context about the problem here. If applicable, add screenshots to help explain.
