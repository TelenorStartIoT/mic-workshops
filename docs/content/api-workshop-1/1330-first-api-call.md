---
title: First API call
url: api-workshop-1/first-api-call/
weight: 1330
menu:
  api:
    parent: "Workshop 1: Create an API Client"
    identifier: First API call
---

We now have the necessary info to make our first unauthenticated API call. The next step is to authenticate with a username/password combination.

## Auth API

You can find the full documentation on the [Auth API here](https://docs.telenorconnexion.com/mic/rest-api/auth/). The Auth API has multiple endpoints but we'll use the [LOGIN](https://docs.telenorconnexion.com/mic/rest-api/auth/#login) endpoint. To login we need to send a `POST` request to the API endpoint `/auth/login`.

Continue by adding code to `index.js` for our request:

```javascript
const main = async () => {
  try {
    // Make a login request
    const response = await api({
      method: 'post',
      url: '/auth/login'
    })
    console.log('Auth API response:', response.data)
  } catch (e) {
    console.error('An error occured:', e)
  }
}
```

We also need to include a username/password combination as payload:

```javascript
const response = await api({
  method: 'post',
  url: '/auth/login',

  // Add a username/password combination as payload
  data: {
    userName: USERNAME,
    password: PASSWORD
  }
})
```

Run the program:

```sh
node index.js
```

If you've provided the correct cofiguration you should get a response with session tokens required to make authenticated requests.
