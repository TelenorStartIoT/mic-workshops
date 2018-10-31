---
title: Get Started with the API
url: api-get-started/
weight: 1110
---

The RESTful API makes it possible to use a wide variety of technologies to utilize the MIC platform. As long as you can make HTTP-calls you're good to go.

In the following workshops we'll use [Node.js](https://nodejs.org/) with the [Vue.js](https://vuejs.org/) JavaScript framework. It's fast to get started with and building a functioning application.

## Installing Node.js

The easies way of getting Node.js is to install the [Node Version Manager (NVM)](https://github.com/creationix/nvm). Head over to their GitHub page for instructions on how to install it for your preferred platform.

If running a Linux distribution it should be enough running the following command:

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Verify your installation:

```sh
nvm --version
```

Download, compile and install the latest release of Node.js:

```sh
nvm install node
```

Verify your Node.js installation:

```sh
node --version
```

Verify your [Node Package Manager (NPM)](https://www.npmjs.com/) installation:

```sh
npm --version
```

## Installing Vue.js

Vue.js is a lightweight JavaScript framework similar to what React and Angular are. We'll use it to scaffold and create web applications in no time.

Install the [Vue CLI](https://cli.vuejs.org/guide/installation.html):

```sh
npm install -g @vue/cli
```

Verify your installation:

```sh
vue --version
```

{{< note title="Verify" >}}
Verify that you can run **node**, **npm** and **vue** as commands in a terminal before moving on to Workshop 1.
{{< /note >}}
