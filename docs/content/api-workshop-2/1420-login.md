---
title: Login
url: api-workshop-2/login/
weight: 1420
menu:
  api:
    parent: "Workshop 2: Use the API"
    identifier: Login
---

Included in this code stub is a `api.class.js` file containing a class performing the steps we've covered in the previous workshop.

Open `index.js`. Include the API class and instantiate a new API object:

```javascript
// mic-workshops/workshops/02/index.js

const API = require('./api.class.js')
const myApi = new API('< API key >')
```

## Login

The API class has already setup the base URL and API key for us. It also exposes a `login()` method we'll use to authenticate a user. Add code to login a user:

```javascript
const main = async () => {
  try {
    await myApi.init() // Init API (fetch Manifest)
    await myApi.login({
      username: '< your MIC username >',
      password: '< your MIC password >'
    })
    console.log('Success! Logged in')
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
```

Run the program:

```sh
node index.js
```

If you've provided a valid username/password combination you should see the message `Success! Logged in` printed in the console.
