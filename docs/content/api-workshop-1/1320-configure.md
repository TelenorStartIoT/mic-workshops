---
title: Configure
url: api-workshop-1/configure/
weight: 1320
menu:
  api:
    parent: "Workshop 1: Create an API Client"
    identifier: Configure
---

You should now have a clone of a stub project where we will continue to write code for our first API request.

Open `index.js`. You should see the following content:

```javascript
// mic-workshops/workshops/01/index.js

const axios = require('axios') // HTTP library

// Insert variables
const API_URL = ''
const API_KEY = ''
const USERNAME = ''
const PASSWORD = ''

// Init HTTP client
const api = axios.create({
  baseURL: API_URL,
  headers: {
    // Attach required 'x-api-key' header with every request
    'x-api-key': API_KEY
  }
})

const main = async () => {
  // Implement me!
}

// Invoke our program
main()
```

## Configure

The first step is to find out the `API_URL` and the `API_KEY`. Every request must have at least the `x-api-key` header included in order for the API to serve the request. You need to find the Manifest and extract `ApiGatewayRootUrl` from there.

Variable | Value
--- | ---
API_URL | `(from Manifest) ApiGatewayRootUrl/prod`
API_KEY  | `< ask your provider >`
USERNAME | `< your MIC username >`
PASSWORD | `< your MIC password >`

Insert the values into your program:

```javascript
const API_URL  = 'https://xxxxxxxxxx.execute-api.xx-xxxx-x.amazonaws.com/prod'
const API_KEY  = '< API key >'
const USERNAME = '< your MIC username >'
const PASSWORD = '< your MIC password >'
```
