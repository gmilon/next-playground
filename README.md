# Next.js Playground

Ok Nuxt is fun, but let's see what NextJs can do =)

I'm basically pulling data from newsAPI.org. This project contains 2 pages.

- The listing page that list all the news and the details news.
- The detail page simply render the details of the news

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

There are 3 steps in order to deploy this project.

### Step 1

Using vercel CLI, create a new project and get the ORG_ID and PROJECT_ID and a SECRET_TOKEN

Set those variable under github secrets in the project settings.

simply push on the branch main.

### Step 2

Everytime you push a change on the branch, cypress will run all the acceptance criterias

if they ALL pass then got to step 3

### Step 3

Deploy the project on vercel.
