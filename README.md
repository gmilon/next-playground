# Next.js Playground

![workflow](https://github.com/gmilon/next-playground/actions/workflows/ci.yml/badge.svg)

Ok Nuxt is fun, but let's see what NextJs can do =)

I'm basically pulling data from newsAPI.org. This project contains 2 pages.

- The listing page that list all the news and the details news.
- The detail page that simply render the details of the news

## Getting started

This project depends on node >= 16 please make sure you have it installed on your system.

```bash
git clone git@github.com:gmilon/next-playground.git
cd next-playground
yarn
yarn dev
```

## Run the tests

How to make sure this project is working??
The only way is to test it.
No worries.

Simply run

```bash
yarn test
```

## Run the CI/CD pipeline

You can easily deploy it on vercel.

There are 2 steps in order to deploy this project.

### Step 1

Using vercel CLI, create a new project and get the ORG_ID and PROJECT_ID and a SECRET_TOKEN

```bash
vercel
```

You can get ORG_ID and PROJECT_ID in the .vercel/project.json
for the secret token you must generate it from you dashboard

Set those variable under github secrets in the project settings.

simply push to the branch main.

### Step 2

Everytime you push a change on the branch, cypress will run all the acceptance criterias

if they ALL pass then it deploys the project

Enjoy =)
