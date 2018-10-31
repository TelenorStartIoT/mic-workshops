---
title: Why use MIC
url: get-started/why-use-mic/
weight: 120
menu:
  main:
    parent: Get Started
    identifier: Why use MIC
---

You're probably wondering "what does MIC has to offer for me?".

There are several components, both known and unknown to most of us, when creating a full-blown IoT infrastructure. It's easy to say "I'll just spin up a SQL database and pipe all my data to it", but how will you connect your IoT devices through LoRaWAN / NB-IoT, handle realtime updates, structure a fleet of e.g. 100+ IoT devices and query gigabytes of data stored years ago? MIC has all the answers to these problems.

## Storage

MIC is mainly built on top of [AWS](https://aws.amazon.com/). It utilized the [Simple Storage Service (S3)](https://aws.amazon.com/s3/) for long term data storage. This data is indexed by the extremely powerful [Elasticsearch](https://www.elastic.co/) indexing engine which gives you an intuitive querying interface to retrieve data however you want for later analysis.

The best part: all you have to do is send data to the platform and the rest is handled for you.

## Realtime

MIC maintains a [MQTT broker](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html) which is part of [AWS IoT](https://aws.amazon.com/iot/). What this means is that you can utilize a MQTT client in any language/platform (supporting X.509 certificates) for both listening on incoming data and send data downlink to your IoT devices.

## Rules Engine

MIC provides a highly configurable Rules Engine which lets you trigger custom events such as HTTP web-hooks or sending email/sms based on predefined conditions. This lets you chain events based on incoming data from your IoT devices.

## Structuring Your Infrastructure

MIC provides an intuitive way to structure your IoT infrastructure. `Thing Types` act as classes for defining common traits of similar `Things`. In this way you can easily add more `Things` to already existing groups of `Thing Types`.

## Access Management

`Users` and `Thing Types` can be sorted under `domains`. Use `sub-domains` to create a domain-tree of which users get different access to parts of your infrastructure.

These are some of the features included in the Managed IoT Cloud suite. I hope you've got an overview of what's in store. Next we'll start by setting up an IoT device.
