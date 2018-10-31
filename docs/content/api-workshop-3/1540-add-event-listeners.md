---
title: Add Event Listeners
url: api-workshop-3/add-event-listeners/
weight: 1540
menu:
  api:
    parent: "Workshop 3: MQTT Realtime"
    identifier: Add Event Listeners
---

After we've instantiated a new MQTT client we need to add event listeners. Event listeners are "hooks" that trigger functions when different MQTT events occur.

Continue by adding code to `index.js`:

```javascript
// If an error occurs
MQTTClient.on('error', e => {
  console.error('MQTT error:', e)
})

// If a reconnect happens
MQTTClient.on('reconnect', () => {
  console.error('MQTT reconnect, check topic')
})

// Incoming message
MQTTClient.on('message', (topic, message) => {
  console.log('MQTT message: ', JSON.parse(message.toString('utf-8')))
})
```

We've added three event listeners, but before we can watch incoming messages we need to subscribe to a `topic`. Enter what's called the [Thing Update API](https://docs.telenorconnexion.com/mic/cloud-api/thing-update/), wich exposes different MQTT topics we can subscribe to.

This API exposes the full underlying AWS IoT MQTT topic structure for a client logged in like we have done (through Cognito). All client facing topics are qualified by the domain path of the thing.

The topic for incoming messages starts with `thing-update/`, and we append a domain-path after that. E.g. `thing-update/workshop/0000123321` to listen for Thing `0000123321` in the domain `workshop`.

Find out the full domain-path of a `Thing` and the Thing name.

{{< note title="Verify" >}}
If you're lucky, someone during the workshop will provide a dummy **Thing** and a topic wich you can experiment with.
{{< /note >}}

Continue by adding the `connect` event listener, which subscribes to a `topic`:

```javascript
// Subscribe to a topic after connect
MQTTClient.on('connect', () => {
  MQTTClient.subscribe('thing-update/domain/path/of/a/thing/0000123321')
})
```
