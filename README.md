# Coding Coach
[![Build Status](https://api.travis-ci.org/Coding-Coach/coding-coach.svg?branch=develop)](https://travis-ci.org/Coding-Coach/coding-coach)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Coding-Coach/coding-coach/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

Connecting developers with mentors worldwide.

## Getting started

1. Clone this repo
```
https://github.com/Coding-Coach/coding-coach.git
```

2. Install the node modules and starting the server:

```sh
yarn
yarn start
```

## Slack

Coding Coach is on Slack! [Click here](https://coding-coach.slack.com/join/shared_invite/enQtNDYxNTcwMjk4MDcwLThiZjY1MTM2YTU1YzM2MGI1N2Y1NDI3ZGM1MGRhNjdiZjU0MzE1YjMxZjdlZmVlNDdhNmFhN2RhNGIxZmE1YTI) to join.

## Styling
Initially we decided to use SASS to handle the CSS. However, over time we decided to use [tailwind](https://tailwindcss.com/docs/what-is-tailwind)! We are currently migrating all our styles to tailwind.

Please, every new PR *should be using tailwind* for styling the components. Eventually we want to remove SASS, but for now it will be still there to support legacy code.

## Internationalization
One of the goals we have with this platform is to provide mentorship all over the world, therefore we want to support as many languages as possible.

We are using [LinguiJS](https://lingui.js.org/tutorials/react.html) as the library to enable i18n support. Lingui provides a CLI tool to manage the keys and texts. When working on a new feature that requires you to add some text, we are going to use the CLI to insert that new text into the dictionaries. Follow these steps:

First you need to define the key in the code:
```
  <p><Trans id="home.header.title" /></p>
```

Then in your terminal you need to extract all the keys running the following command:
```
$ yarn i18n-extract

Catalog statistics:
┌──────────┬─────────────┬─────────┐
│ Language │ Total count │ Missing │
├──────────┼─────────────┼─────────┤
│ en       │     18      │    1    │
│ es       │     18      │   18    │
│ fr       │     18      │   18    │
└──────────┴─────────────┴─────────┘

(use "lingui add-locale <language>" to add more locales)
(use "lingui extract" to update catalogs with new messages)
(use "lingui compile" to compile catalogs for production)
✨  Done in 2.95s.
```

At this point the key will be inserted into all dictionaries, and we will also see a nice count of the missing keys, in this example for english there's only one key missing for translation (The one we just defined in our code), but for the other languages we need to translate them all. This is a nice feature because we can easily know which translations are missing.

Open the `src/config/i18n/en/messages.json` file (not the `.js` but the `.json` file) and add the translation to the new key, if you can speak other languages, please go ahead and add the translations as well, if not we can leverage in our community to add the missing translations later on.

Finally we need to compile the dictionaries, just run the following command in your terminal:
```
$ yarn i18n-compile
```

This will generate the compiled dictionaries that our app will be using.

### Coding Coach Board

In order to organize all the work, we are using [zenhub.com](https://zenhub.com) to keep track of all the epics and tasks. After you login to ZenHub search for the `Coding-Coach/coding-coach` repository, make sure you don't add someone else's fork.

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

## Code of Conduct

At Coding Coach, we value all our mentors, mentees, and contributors. Our goal is to make this a safe space where new and experienced developers can connect and learn from one another. Therefore, we do not tolerate any form of harassment or prejudice. This Code of Conduct applies to all Coding Coach spaces including but not limited to slack, email correspondence, and social media.

Harassment includes but is not limited to:

- Offensive comments related to gender, gender identity and expression, sexual orientation, disability, mental illness, physical appearance, body size, age, race, or religion.
- Deliberate misgendering or use of ‘dead’ or rejected names.
- Physical contact and simulated physical contact (eg, textual descriptions like “hug” or “backrub”) without consent or after a request to stop.
- Threats of violence.
- Incitement of violence towards any individual, including encouraging a person to commit suicide or to engage in self-harm.
- Deliberate intimidation.
- Stalking or following.
- Harassing photography or recording, including logging online activity for harassment purposes.
- Unwelcome sexual attention such as sexual images or behaviour in spaces where they’re not appropriate.
- Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others
- Continued one-on-one communication after requests to cease.
- Deliberate “outing” of any aspect of a person’s identity without their consent except as necessary to protect vulnerable people from intentional abuse.
- Publication of non-harassing private communication.

We value integrity here at Coding Coach. As such, mentees may not ask for solutions to technical interview take home assessments. We're happy to mentor you in the process of solving difficult questions, but will not provide you with solutions to your assessments as they are meant to reflect your personal skill set.

Members who violate this code of conduct will be approached by someone of the Coding Coach leadership team and asked to stop immediately. Members may also be banned from the Coding Coach slack, blocked on social media, and removed from the website.

If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. To report an incident of harassment, anonymously or otherwise, please fill out our [report form](https://forms.gle/bcSWqNNcsdo3zDD17).

Our primary goal is to support you. We will listen to you and then help you determine a course of action based on the situation. While harassment may not always result in that member being expelled from the group, depending on the type and severity of harassment. We want to make sure you have all the support you need no matter what that entails, including whether to stay anonymous or not. Whatever decision you make, our priority is your safety.

# Support Coding Coach
Our goal is to keep Coding Coach a free platform because we believe that mentorship should be free and accessible for all users. However, there are some costs incurred with creating a platform. We could use your help! If you're just as passionate about Coding Coach as we are, we'd appreciate your support on [Patreon](https://www.patreon.com/codingcoach_io). Here, you can sign up to be a member and help support our mission.
