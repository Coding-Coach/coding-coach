---
title: Instagram Feed API
date: 2019-11-27
tags:
  - instagram
  - lambda
  - netlify
image: netlify-lambda.jpg
author: cristian-echeverria
---

While I was working on a website for a relative, one of the requirements was to link one of the sections of the site with their Instagram account.

So the concept was that; every time they post a picture on Instagram shows that picture on their website. But, only show the last 3 pictures.

So I was Googlelin trying to find a solution for this, I was thinking there has to be a third-party solution for this, and maybe I can find it for FREE, and yes, I found a couple of solutions but none was something I liked.

And of course, I didn't want to pay for something like that, after all this site is hosted on Netlify with their free tier, the site is simple... no special framework, no nothing... just good old Javascript, HTML & CSS.

### Step 1: Instagram API

Instagram has documentation for developers where you can find [Endpoints](https://www.instagram.com/developer/endpoints/users/) for "Get the most recent media published by the owner of the access_token." The endpoint is this:

`https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN`

So, what we need now is to get an ACCESS_TOKEN.

And you can do that by two simple steps:

1- Login to the user Instagram Account

2- Once you had logged in, you can click this [Site](https://instagram.pixelunion.net/), where you can Generate an ACCES_TOKEN by clicking a simple button.

Now, we need somehow to have access to the Instagram API. But our website is static, I'm not using a server, is not necessary because this site was mean to be simple, remember? just good old Javascript, HTML & CSS.

So we have a problem here.
The Solution?. Add dynamic-functionality with AWS Lambda Functions, [here](https://aws.amazon.com/lambda/) you can read more about this concept.

### Step 2: Netlify Functions

When you build and deploy sites on netlify, you can interact with third-party services and APIs with javascript places directly in your site. For example, you can have a script that sends event data to google analytics, or adds someone to a mailchimp list, or sends a request to a zapier webhook.

But what if you want to write scripts with something other than javascript? Or if you want to do more complex things like resize images or query a database? Or if you have sensitive information in your script such as API tokens that you don’t want embedded on your site and visible to all? Or if there is no service or API that does what you need?

That’s where [Netlify Functions](https://functions.netlify.com/) come in.

Now that we have access to AWS Lambda Functions we can use one of the examples that you can find in Netlify site and create a Javascript script in your project like this:

```
const axios = require('axios')

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://api.instagram.com/v1/users/self/media/recent'
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const limit = 5

  axios
    .get(`${endpoint}?access_token=${token}&count=${limit}`)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map(i => ({
            id: i.id,
            link: i.link,
            images: i.images,
            videos: i.videos,
            caption: i.caption.text,
          })),
        ),
      })
    })
    .catch((e) => {
      callback(e)
    })
}
```

### Step 3: Testing your Lambda

As you can see, at this point we need to install some node libraries like Axios in order to fetch data from Instagram API. Also, you can test your code locally using netlify-lambda.

`npm i netlify-lambda axios`

With that, you can add a command into your package.json in order to serve your lambda function using netlify-lambda, you have to specify the location of your lambda function. In my case I created a `./functions` folder and added my lambda functions there:

```
"scripts": {
    "lambda-serve": "netlify-lambda serve functions",
    "lambda-build": "netlify-lambda build functions"
  },
```

Another useful step is create a `netlify.toml` file in the root of your project and you can add the some commands like this:

```
[build]
    functions = "lambda"
    Command = "npm run lambda-build"
```

Have in mind that you can also [specify the location of your lambda functions](https://docs.netlify.com/functions/configure-and-deploy/#configure-the-functions-folder) in netlify settings for your project, but if you use **netlify.toml** file it will override your configuration.

Once you deploy your project to Netlify, it will install all the dependencies of you lambda function like **axios**.

Also, you have to create environment variables for your ACCESS_TOKEN, as we defined in our code.

`const token = process.env.INSTAGRAM_ACCESS_TOKEN`

In order to create environment variables in Netlify, you can follow [this guide](https://docs.netlify.com/configure-builds/environment-variables/#netlify-configuration-variables), this is important because it allow us to hide the value of our ACCESS_TOKEN.

Alright!

Once you deploy your project, now you can get the result of your Lambda Function adding `/.netlify/functions/` to your domain, for example:

`https://my-awesome-domain.com/.netlify/functions/my-lambda-function` where `my-lambda-function` is the name of the Javascript file where you defined your lambda function.

### Testing locally

You can also test the result of you Lambda locally. Remember that we added **netlify-lambda** library into our project?. We also added a command in our **project.json** file for serve our lambda functions.

So in order to test this locally, just run the command `npm run lambda-serve` and you have a local server in the port 9000.

Let me show you a small example of how you can test this locally:

```
const fetchInstafeed = async () =>
  await (await fetch('http://localhost:9000/.netlify/functions/getInstagramFeed')).json();
fetchInstafeed().then(data => {
  ...
});
```

**But don´t forget** to update the fetch url to just `/.netlify/functions/getInstagramFeed` when you're ready to deploy your site.

**One more note:** Also I have to say that in order to test Instagram API locally, I had to update the header of my Lambda Function, because of CORS policy, to something like this:

```
headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept'
        },
```

### Conclusion

I hope that you found this blog post helpful in some way. I personally think that using Static sites with the power of Lambda Functions is just awesome, the power of serverless applications is just great, thanks to Netlify team that setup this. Now I can make request to some API and transform my static site into a dynamic one.
