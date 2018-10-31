---
title: Authenticate API Call
url: api-workshop-1/authenticate-api-call/
weight: 1350
menu:
  api:
    parent: "Workshop 1: Create an API Client"
    identifier: Authenticate API Call
---

All other API endpoints except for `/auth/` and `/metadata` requires a logged in user. As we saw in the previous page, we called `/auth/login`. The response after a successful login contains a `credentials` object with three properties; `identityId`, `token` and `refreshToken`.

Example response:

```json
{
  "credentials": {
    "identityId": "eu-west-1:72ty9374-29ko-1293-384y-4g66u87f3hfe",
    "token": "nkiOiJNeSIsImN1c3Rvb",
    "refreshToken": "DnTY4m2lpDPb3BjG"
  }
}
```

This object needs to be stored locally by the API consumer in order to remove the need to login before every request. After it has been stored, the `identityId` should be added as a header or a query parameter. This is specifically used for backwards compatibility. The `token` should be added to the `Authorization` header. If one of the previously mentioned data is missing from the request, the API will send a `403 forbidden` response. Remember that you always have to add `x-api-key` header to your requests.

Header | Value
--- | ---
Authorization | `The Authorization token returned from /auth/login`
identityId  | `The identityId returned from /auth/login`
x-api-key | `The API Key to identify the request`

## Making an Authenticated API Call

Let's continue on our code.

Add a `API_CREDENTIALS` variable at the top:

```javascript
let API_CREDENTIALS = null
```

After we've made the first `/auth/login` request, store the received credentials object in the new variable:

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

// Store login credentials for later usage
API_CREDENTIALS = response.data.credentials
```

After the credentials has been stored we can now start making authenticated API calls.

Let's call the [User API GET](https://docs.telenorconnexion.com/mic/rest-api/user/#get) endpoint to retrieve our user information:

```javascript
// Make a User API GET request to the /users/{userName} endpoint
const auth_response = await api({
  method: 'get',
  url: '/users/' + USERNAME,
  
  // Add authentication headers
  headers: {
    Authorization: API_CREDENTIALS.token,
    identityId: API_CREDENTIALS.identityId
  }
})
console.log('User API response:', auth_response.data)
```

Congratulations! You've now logged in, received authentication tokens and made an authenticated API call. Try exploring the [REST API documentation](https://docs.telenorconnexion.com/mic/rest-api/) and modify our code to use other endpoints.
