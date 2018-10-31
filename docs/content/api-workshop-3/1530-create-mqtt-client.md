---
title: Create MQTT Client
url: api-workshop-3/create-mqtt-client/
weight: 1530
menu:
  api:
    parent: "Workshop 3: MQTT Realtime"
    identifier: Create MQTT Client
---

We now have all the necessary info to actually create the MQTT client. We'll use a package called `aws-mqtt-client` which works both in the browser and in Node.js. You can find the full documentation for the [aws-mqtt-client package here](https://github.com/jimmyn/aws-mqtt-client).

Continue by adding code to `index.js`, after we've logged in:

```javascript
// Instantiate a new MQTT client with configurations
let MQTTClient = new AWSMqtt({
  region: AWS_REGION,
  endpointAddress: IOT_ENDPOINT,
  maximumReconnectTimeMs: 8000,
  protocol: 'wss'
})
```

You can see here that we're using `AWS_REGION` and `IOT_ENDPOINT` during the MQTT client initialization. However, this is not enough. We still need to provide the client some additional keys in order to authorize against the AWS IoT MQTT broker.

## Amazon Cognito: accessKeyId, secretAccessKey and sessionToken

So you may wonder where these keys come from. Since the MQTT broker we want to authorize against is part of AWS IoT, we need a `Cognito Identity`. [Cognito](https://aws.amazon.com/cognito/) is a AWS service for user management and it is used by MIC. An authorized client may obtain a `Cognito Identity` which yields a `accessKeyId`, `secretAccessKey` and a `sessionToken`.

So we now know they are necessary for the MQTT client in order to authorize against the MQTT broker, but how are they obtained?

Recall workshop 1, where we used the [Auth API LOGIN](https://docs.telenorconnexion.com/mic/rest-api/auth/#login) endpoint to obtain a session token. This token is used to authorize HTTP calls against protected API endpoints, but it can also be used to create a `Cognito identity`. Luckily, the `api.class.js` included in the code already has this procedure implemented in the `createCognitoIdentity()` method. All we need to do is to tell our program to create a `Cognito Identity` before we create our MQTT client.

Add code to create a `Cognito Identity` before we create our MQTT client:

```javascript
// Create a Cognito Identity before authorizing MQTT client
const cognitoIdentity = await myApi.createCognitoIdentity(myApi.credentials.token)

// Instantiate a new MQTT client with configurations
let MQTTClient = new AWSMqtt({
  region: AWS_REGION,
  accessKeyId: cognitoIdentity.accessKeyId,
  secretAccessKey: cognitoIdentity.secretAccessKey,
  sessionToken: cognitoIdentity.sessionToken,
  endpointAddress: IOT_ENDPOINT,
  maximumReconnectTimeMs: 8000,
  protocol: 'wss'
})
```

## Complete Code

```javascript
const AWSMqtt = require('aws-mqtt-client').default
const API = require('./api.class.js')
const myApi = new API('< API key >')

// Insert variables
const IOT_ENDPOINT = 'xxxxxxxxxxxxxx.iot.xx-xxxx-x.amazonaws.com'
const AWS_REGION = 'xx-xxxx-x'
const USERNAME = '< your MIC username >'
const PASSWORD = '< your MIC password >'

const main = async () => {
  try {
    await myApi.init() // Init API (fetch Manifest)
    await myApi.login({
      username: USERNAME,
      password: PASSWORD
    })

    // Create a Cognito Identity before authorizing MQTT client
    const cognitoIdentity = await myApi.createCognitoIdentity(myApi.credentials.token)

    // Instantiate a new MQTT client with configurations
    let MQTTClient = new AWSMqtt({
      region: AWS_REGION,
      accessKeyId: cognitoIdentity.accessKeyId,
      secretAccessKey: cognitoIdentity.secretAccessKey,
      sessionToken: cognitoIdentity.sessionToken,
      endpointAddress: IOT_ENDPOINT,
      maximumReconnectTimeMs: 8000,
      protocol: 'wss'
    })
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
```
