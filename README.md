# Next.js Playground

Ok Nuxt is fun, but let's see what NextJs can do =)

I'm basically pulling data from newsAPI.org. This project contains 2 pages.

- The listing page that list all the news and the details news.
- The detail page simply render the details of the news

## Getting started

This project depends on node >= 16 please make sure you have it installed on your system.

```bash
git clone url-of-the-project
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

## Deploy it

You can easily deploy it on vercel.

There are 3 steps in order to deploy this project.

### Step 1

configure vercel and github actions.

#### Vercel

TODO

#### Github Actions

TODO

### Step 2

Everytime you push a change on the branch, cypress will run all the acceptance criterias

if they ALL pass then got to step 3

### Step 3

Deploy the project on vercel.
