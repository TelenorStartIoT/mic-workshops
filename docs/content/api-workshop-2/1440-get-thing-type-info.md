---
title: Get Thing Type Info
url: api-workshop-2/get-thing-type-info/
weight: 1440
menu:
  api:
    parent: "Workshop 2: Use the API"
    identifier: Get Thing Type Info
---

After we've listed all available `Thing Types` we will continue to query information about a specific `Thing Type`.

We'll use the [Thing Type GET](https://docs.telenorconnexion.com/mic/rest-api/thing-type/#get) endpoint to get information about a specific `Thing Type`. This is done by sending a `GET` method to `/thingtypes/{id}` with a `Thing Type` ID as query parameter.

Thing Type GET | 
--- | ---
Method | `GET`
Endpoint | `/thingtypes/{id}`
{id} | `The ID of the Thing Type to get, set in query path`

Continue to add code after our `login()` call, using the `invoke()` method.

Replace the `Thing Type` ID with an ID from your `Thing Types`:

```javascript
let result = await myApi.invoke({
  url: '/thingtypes/191' // Replace 191 with your Thing Type ID
})
console.log(result.data)
```

## Complete Code

```javascript
const API = require('./api.class.js')
const myApi = new API('< API key >')

const main = async () => {
  try {
    await myApi.init() // Init API (fetch Manifest)
    await myApi.login({
      username: '< your MIC username >',
      password: '< your MIC password >'
    })

    let result = await myApi.invoke({
      url: '/thingtypes/191' // Replace 191 with your Thing Type ID
    })
    console.log(result.data)
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

The user should now be logged in and print information about a specific `Thing Type`.
