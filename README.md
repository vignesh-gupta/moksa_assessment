# MokSa.ai Assessment Monorepo

This is a monorepo project structured with [Turborepo](https://turborepo.com/), containing full-stack applications and shared packages for rapid development and deployment.

## Table of Contents

- [What's Inside?](#whats-inside)
- [Getting Started](#getting-started)

---

## What's Inside?

This Turborepo includes the following apps and packages:

### Apps

- **backend**: Node.js backend application (see [`apps/backend`](apps/backend/README.md))
- **web**: [Next.js](https://nextjs.org/) frontend application (see [`apps/web`](apps/web/README.md))

### Packages

- **@moksa_asses/eslint-config**: Shared ESLint configuration ([`packages/eslint-config`](packages/eslint-config/README.md))
- **@moksa_asses/typescript-config**: Shared TypeScript configuration
- **@moksa_asses/utils**: Shared utility functions

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

---

## Getting Started

Clone the repository and install dependencies:

```sh
git clone <repo-url>
cd moksa_assessment
pnpm install
```