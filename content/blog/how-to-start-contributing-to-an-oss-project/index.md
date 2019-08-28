---
title: How to start contributing to an OSS project
date: 2019-01-14
tags: ['open source', 'coding', 'community']
author: crysfel-villa
image: main.jpg
---
Contributing to Open Source has been by far one of the greatest experiences as a software developer in my career. I’ve been putting my work out there for years and some people has been cloning my projects for a while, none of them has been very popular though.

A couple months ago I joined Coding Coach, a very active/popular project where we want to help people connect with mentors world wide. At this point the platform is still under development but we do have a healthy community of people willing to help each others.

When a new member joins the community, they often have the same questions: *Where should I start? How can I start contributing to this project? Am I good enough to join the dev team?*

In this post I will try to answer those questions and explain how you can join the development team to start contributing to your first Open Source Project! These steps can also be applied to most Open Source projects out there.

## Join the community’s forum/slack/discord
Most communities have an easy way to reach out to the core team. I’d say this is the first step you will need to do, find out what tool the community is using and join!

At Coding Coach we use slack, as soon as you join introduce yourself at the #introductions channel, make sure to upload an avatar and set your Github id in your profile. We are a very friendly community so don’t be afraid to jump in to any of the public channel and participate.

We are still building the platform to connect people with mentors, but we have a #help channel where you can ask any question, even if is not related to coding coach.

If you want to join the dev team, make sure to visit the #front-end/#back-end channels. We have discussions on what technology to use, what needs to be done, general questions about the code and help about the project. Feel free to jump in and participate!

## Install the app in your local environment
Running the app in your local environment is the first step to start contributing to any project. Usually the installation steps are defined in the [README.md](https://github.com/Coding-Coach/coding-coach/blob/master/README.md) file, sometimes there's a [CONTRIBUTING.md](https://github.com/Coding-Coach/coding-coach/blob/master/CONTRIBUTING.md) file, make sure to read all those guidelines.

In the case of Coding Coach, we decided to separate the [backend](https://github.com/Coding-Coach/find-a-mentor-api) from the [frontend](https://github.com/Coding-Coach/find-a-mentor). You can either contribute to one of those or both of them. The main reason we decided to split the codebase is because we wanted to make things super simple for you to participate, if you don't want to run the backend in your local, by default the frontend uses a [staging server](https://api-staging.codingcoach.io/) we have in the cloud, you don't have to do anything in order to use it.

It’s a common practice to fork the project you want to contribute, clone your fork to your local and add the original project as remote. We have detailed steps in our readme file.

## Browse the current issues
Once you have the app running you might want to start working on something. The best way to find out what you can work on, is to take a look at the [issues page](https://github.com/Coding-Coach/coding-coach/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) in Github.

Many projects use labels, when joining a project you should look for the `Good first issue` label. Most projects will have this label to mark easy to start issues.

At coding coach, we use this label to mark easy bugs and tasks, for example ~~we have several tasks about migrating from sass to tailwind~~ (Migration is completed by now), all these issues are fairly easy to complete and will give you enough exposure to the code base to make yourself comfortable.

## Ask questions about the issue
Make sure you understand the task! Ask as many questions as needed, is important to fully understand what needs to be done. Sometimes issues are not well described or missing some important information.
If necessary ask for some help about the solution you are proposing. Or if you are not sure if what you have in mind is the most efficient way to solve the problem, don’t be afraid to ask.

At coding coach we want to use the development of the platform as a learning experience for everyone. If you are new to software development, just ask for some wisdom from more experienced people. We encourage anyone to join the dev team and bring their perspective to the table, no matter how experienced you are.

Coding coach is a great project to get your feet wet and work with awesome people in a fully distributed team across the globe!

## Own the issue
Not every projects does this, but at coding coach we require that each issue should be assign to a single person, we don’t want to waste your time and work on something that someone else is working.

Ask the maintainers to assign the issue to you. For that you will need to be part of the Github organization, just go to the #front-end-gh-access/#back-end-gh-access channels in slack and leave your Github id. Once a day we add new people to the organization.

Once the maintainers assigned the issue to you, work should start! The process is detailed in the Readme file.
Once you created a new Pull Request (PR) for the issue, maintainers will review your code, leave comments, suggestions or change requests. Your first PR will have so many comments for sure, don’t be discourage by that.
As you get familiar with the codebase, things will get a bit easier when working in new issues. We are always available in slack to answer any question you have about the project.

Happy coding and welcome to the Team!