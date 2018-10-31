---
title: List Thing Types
url: api-workshop-2/list-thing-types/
weight: 1430
menu:
  api:
    parent: "Workshop 2: Use the API"
    identifier: List Thing Types
---

We've now logged in a user using the `login()` method of the included API class. This included API class also exposes a `invoke()` method we can use to call the API with the necessary headers included after we've logged in.

Next we'll list all `Thing Types` available to our currently authorized user. We'll use the [Thing Type LIST](https://docs.telenorconnexion.com/mic/rest-api/thing-type/#list) endpoint to get a list of all `Thing Types`. This is simply done by sending a `GET` method to `/thingtypes`.

Thing Type LIST | 
--- | ---
Method | `GET`
Endpoint | `/thingtypes`

Continue to add code after our `login()` call, using the `invoke()` method:

```javascript
let result = await myApi.invoke({
  url: '/thingtypes'
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
      url: '/thingtypes'
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

The user should now be logged in and print a list of available `Thing Types`.

{{< note title="Save a Thing Type ID" >}}
Pick one **Thing Type** from the result and save the ID for the next page when we'll get more info about a **Thing Type**.
{{< /note >}}
