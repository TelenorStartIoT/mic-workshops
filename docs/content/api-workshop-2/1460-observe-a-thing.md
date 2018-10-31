---
title: Observe a Thing
url: api-workshop-2/observe-a-thing/
weight: 1460
menu:
  api:
    parent: "Workshop 2: Use the API"
    identifier: Observe a Thing
---

Similarily to finding `Things`, we'll now use the `Observation API` to find or "observe" historical data reported by `Things`.

We'll use the [Observation FIND](https://docs.telenorconnexion.com/mic/rest-api/observation/#find) endpoint. This is done by sending a `POST` method to `/observations/find` with an Elasticsearch query as payload.

Observation FIND | 
--- | ---
Method | `POST`
Endpoint | `/observations/find`
Body | The query to run on Elasticsearch specified using [Elasticsearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/query-dsl.html)

Continue to add code after our `login()` call, using the `invoke()` method.

Replace `thingName` with a name from your `Things`:

```javascript
let result = await myApi.invoke({
  method: 'post',
  url: '/observations/find',
  data: {
    query: {
      size: 0,
      query: {
        bool: {
          filter: [
            {
              range: {
                timestamp: {
                  gte: 0,
                  lte: + new Date()
                }
              }
            },
            {
              term: {
                thingName: '00001570' // Replace 00001570 with your Thing Type ID
              }
            }
          ]
        }
      }
    }
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
      url: '/observations/find',
      data: {
        query: {
          size: 0,
          query: {
            bool: {
              filter: [
                {
                  range: {
                    timestamp: {
                      gte: 0,
                      lte: + new Date()
                    }
                  }
                },
                {
                  term: {
                    thingName: '00001570' // Replace 00001570 with your Thing Type ID
                  }
                }
              ]
            }
          }
        }
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

The user should now be logged in and print a list of data sent by a specific `Thing`.
