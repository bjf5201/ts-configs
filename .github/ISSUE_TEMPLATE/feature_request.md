name: "💡 Feature Request"
description: Create a new ticket for a new feature request
title: "💡 [REQUEST] - <title>"
labels: [
  "feat"
]
body:
- type: checkboxes
  id: checklist
  attributes:
    label: Follow the steps below.
    description: Check off each action once complete
    options:
      - label: Have you searched the repository's [issues](https://github.com/bjf5201/ts-configs/issues) to ensure this isn't a repeat request? (required)
        required: true
      - label: Have you read the [contributing guide](https://github.com/bjf5201/ts-configs/.github/CONTRIBUTING.md)? (required)
        required: true
  - type: input
    id: start_date
    attributes:
      label: "Start Date"
      description: Start of development
      placeholder: "month/day/year"
    validations:
      required: false
  - type: textarea
    id: implementation_pr
    attributes:
      label: "Implementation PR"
      description: Pull request used
      placeholder: "#Pull Request ID"
    validations:
      required: false
  - type: textarea
    id: reference_issues
    attributes:
      label: "Reference Issues"
      description: Common issues
      placeholder: "#Issues IDs"
    validations:
      required: false
  - type: textarea
    id: summary
    attributes:
      label: "Summary"
      description: Provide a brief explanation of the feature
      placeholder: Describe in a few lines your feature request
    validations:
      required: true
  - type: textarea
    id: basic_example
    attributes:
      label: "Basic Example"
      description: Indicate here some basic examples of your feature.
      placeholder: A few specific words about your feature request or links to examples.
    validations:
      required: true
  - type: textarea
    id: drawbacks
    attributes:
      label: "Impacts"
      description: What are the drawbacks/impacts of your feature request ?
      placeholder: Identify the drawbacks and impacts while being neutral on your feature request
    validations:
      required: true
