# MokSa.ai Assessment Monorepo

This is a monorepo project structured with [Turborepo](https://turborepo.com/), containing full-stack applications and shared packages for rapid development and deployment.

## Problem Statement:

```
This coding challenge is for you to demonstrate your frontend and backend skills
Frontend: React, TypeScript, Next.js
Backend: node.js, Express.js, TypeScript
Feel free to use any other technologies you want to use on top of the technologies mentioned
above.
As a part of this coding challenge, you will build a dashboard for number of customers coming in
and out of the store, you will get the customers info from kafka
Sample messages from kafka
{store_id: 10, customers_in: 2, customers_out:3, time_stamp:10.12.03}
{store_id: 10, customers_in: 0, customers_out:1, time_stamp:10.13.15}
{store_id: 10, customers_in: 2, customers_out:0, time_stamp:10.15.12}
The messages are generated only when a customer walks in or out of the store
The dashboard should have two tables
Live and History table
For live table, you will show the customers coming in and out of the store in real time
For the History Table, you will show the customers coming in and out of the store per hour for
the last 24 hrs.
You don't have to make the website pretty. Please share the GitHub monorepo link when done.
```

## Solution

- Used Event Sourcing to handle the incoming messages from Kafka.
- Server Side Event for the live table to push updates to the frontend in real-time.
- Mongo Time series collection to store the history of the customers coming in and out of the store.

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
