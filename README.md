# Coding Coach
[![Build Status](https://api.travis-ci.org/Coding-Coach/coding-coach.svg?branch=develop)](https://travis-ci.org/Coding-Coach/coding-coach)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Coding-Coach/coding-coach/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

Connecting developers with mentors worldwide.

## Installing

Installing the node modules

```bash
npm install
```

or

```bash
yarn
```

Starting the server

```bash
npm start
```

or

```bash
yarn start
```

### Slack

Coding Coach is on Slack! [Click here](https://coding-coach.slack.com/) to join.

## Styling
Initially we decided to use SASS to handle the CSS. However, over time we decided to use [tailwind](https://tailwindcss.com/docs/what-is-tailwind)! We are currently migrating all our styles to tailwind.

Please, every new PR *should be using tailwind* for styling the components. Eventually we want to remove SASS, but for now it will be still there to support legacy code.

### Coding Coach Board

In order to organize all the work, we are using https://zenhub.com to keep track of all the epics and tasks. After you login to ZenHub search for the `Coding-Coach/coding-coach` repository, make sure you don't add someone else fork.

### Workflow

This section describes the workflow we are going to follow when working in a new feature or fixing a bug. If you want to contribute, please follow these steps:

1. Fork this project
2. Clone the forked project to your local environment, for example: `git clone git@github.com:crysfel/coding-coach-front-end.git` (Make sure to replace the URL to your own repository).
3. Add the original project as a remote, for this example the name is `upstream`, feel free to use whatever name you want. `git remote add upstream git@github.com:Coding-Coach/coding-coach.git`.

Forking the project will create a copy of that project in your own GitHub account, you will commit your work against your own repository.

#### Updating your local

In order to update your local environment to the latest version on `develop`, you will have to pull the changes using the `upstream` repository, for example: `git pull upstream develop`. This will pull all the new commits from the origin repository to your local environment.

#### Features/Bugs

When working on a new feature, create a new branch `feature/something` from the `develop` branch, for example `feature/login-form`. Commit your work against this new branch and push everything to your forked project. Once everything is completed, you should create a PR to the original project. Make sure to add a description about your work.

When fixing a bug, create a new branch `fix/something` from the `develop` branch, for example `fix/css-btn-issues`. When completed, push your commits to your forked repository and create a PR from there. Please make sure to describe what was the problem and how did you fix it.

#### Updating your local branch

Let's say you've been working on a feature for a couple days, most likely there are new changes in `develop` and your branch is behind. In order to update it to the latest (You might not need/want to do this) you need to pull the latest changes to `develop` and then rebase your current branch.

```bash
$ git checkout develop
$ git pull upstream develop
$ git checkout feature/something-awesome
$ git rebase develop
```

After this, your commits will be on top of the `develop` commits. From here you can push to your `origin` repository and create a PR.

You might have some conflicts while rebasing, try to resolve the conflicts for each individual commit. Rebasing is intimidating at the beginning, if you need help don't be afraid to reach out in slack.

#### Pull Requests

In order to merge a PR, it will first go through a review process. Once it is approved, we will merge to the `develop` branch using the `Squash` button in github.

When using squash, all the commits will be squashed into one. The idea is to merge features/fixes as oppose of merging each individual commit. This helps when looking back in time for changes in the code base, and if the PR has a great comment, it's easier to know why that code was introduced.
