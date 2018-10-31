---
title: Configure MQTT Client
url: api-workshop-3/configure-mqtt-client/
weight: 1520
menu:
  api:
    parent: "Workshop 3: MQTT Realtime"
    identifier: Configure MQTT Client
---

You should now have a clone of a stub project where we will continue to write code for our MQTT client.

Open `index.js`. You should see the following content:

```javascript
// mic-workshops/workshops/03/index.js

const AWSMqtt = require('aws-mqtt-client').default
const API = require('./api.class.js')
const myApi = new API()

// Insert variables
const IOT_ENDPOINT = ''
const AWS_REGION = ''
const USERNAME = ''
const PASSWORD = ''

const main = async () => {
  try {
    await myApi.login({
      username: USERNAME,
      password: PASSWORD
    })

    // Implement me!
  } catch (e) {
    console.error('An error occured:', e)
  }
}

// Invoke our program
main()
```

## Configure

The first step is to find out the `IOT_ENDPOINT` and the `AWS_REGION`. These are configurations for our MQTT client, telling it which MQTT broker to use. You need to find the Manifest and extract `IotEndpoint` and `Region` from there.

Variable | Value
--- | ---
IOT_ENDPOINT | `(from Manifest) IotEndpoint`
AWS_REGION  | `(from Manifest) Region`
USERNAME | `< your MIC username >`
PASSWORD | `< your MIC password >`

Insert the values into your program:

```javascript
const IOT_ENDPOINT = 'xxxxxxxxxxxxxx.iot.xx-xxxx-x.amazonaws.com'
const AWS_REGION   = 'xx-xxxx-x'
const USERNAME     = '< your MIC username >'
const PASSWORD     = '< your MIC password >'
```
