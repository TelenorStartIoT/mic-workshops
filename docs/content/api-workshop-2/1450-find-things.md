---
title: Find Things
url: api-workshop-2/find-things/
weight: 1450
menu:
  api:
    parent: "Workshop 2: Use the API"
    identifier: Find Things
---

We'll now find all `Things` attached to a specific `Thing Type`.

We'll use the [Thing Management FIND](https://docs.telenorconnexion.com/mic/rest-api/thing-management/#find) endpoint. This is done by sending a `POST` method to `/things/find` with an Elasticsearch query as payload.

Thing Management FIND | 
--- | ---
Method | `POST`
Endpoint | `/things/find`
Body | The query to run on Elasticsearch specified using [Elasticsearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/query-dsl.html)

Continue to add code after our `login()` call, using the `invoke()` method.

Replace the `Thing Type` ID with an ID from your `Thing Types`:

```javascript
let result = await myApi.invoke({
  method: 'post',
  url: '/things/find',
  data: {
    query: {
      size: 1000,
      query: {
        bool: {
          filter: {
            term: {
              thingType: '191' // Replace 191 with your Thing Type ID
            }
          }
        }
      }
    },
    type: 'thing,sub_thing'
  }
})
console.log(result.data.hits.hits)
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
      method: 'post',
      url: '/things/find',
      data: {
        query: {
          size: 1000,
          query: {
            bool: {
              filter: {
                term: {
                  thingType: '191' // Replace 191 with your Thing Type ID
                }
              }
            }
          }
        },
        type: 'thing,sub_thing'
      }
    })
    console.log(result.data.hits.hits)
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

The user should now be logged in and print a list of `Things`.

{{< note title="Save a Thing Name" >}}
Pick one **Thing** from the result and save the **thingName** for the next page when we'll observe a **Thing**.
{{< /note >}}
