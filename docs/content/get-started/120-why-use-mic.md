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

There are several components that is needed, both known and unknown to most of us, when creating a full-blown IoT infrastructure. It's easy to say "I'll just spin up a SQL database and pipe all my data to it", but how will you connect your IoT devices through LoRaWAN / NB-IoT, handle realtime updates, structure a fleet of e.g. 100+ IoT devices and query gigabytes of data stored years ago? MIC has all the answers to these problems.

## Storage

MIC is mainly built on top of [AWS](https://aws.amazon.com/). It utilized the [Simple Storage Service (S3)](https://aws.amazon.com/s3/) for long term data storage. This data is indexed by the extremely powerful [Elasticsearch](https://www.elastic.co/) indexing engine which gives you an intuitive querying interface to retrieve data however you want for later analysis.

The best part: all you have to do is send data to the platform and the rest is handled for you.

## Realtime

MIC uses an [MQTT broker](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html) which is part of [AWS IoT](https://aws.amazon.com/iot/). This means that you can send data to MIC using an MQTT client in any language/platform (that supports X.509 certificates and TLS or DTLS for MQTT transport), listen (subscibe) to incoming data and send data downlink to your IoT devices from MIC. MIC also supports devices connected using NB-IoT, LTE Cat M1 and LoRaWAN directly.

## Rules Engine

MIC provides a highly configurable Rules Engine which lets you trigger custom events such as HTTP web-hooks or sending email/sms based on predefined conditions. This lets you chain events based on incoming data from your IoT devices. The rules engine can also be used to forward traffic from your devices to other endpoints.

## Structuring Your Infrastructure

MIC provides an intuitive way to structure your IoT infrastructure. `Thing Types` act as classes for defining common traits of similar `Things`. In this way you can easily add more `Things` to already existing groups of `Thing Types`.

## Access Management

`Users` and `Thing Types` can be sorted under `domains`. Use `sub-domains` to create a domain-tree where users in differnet parts of the tree can be given different rights (roles).

## Well Defined REST API (and GraphQL)
All functionality in the MIC Core is exposed in a well defined REST API. You can find the documentation of the REST API here: [https://docs.telenorconnexion.com/mic/](https://docs.telenorconnexion.com/mic/). The API can be used to access all the functionality in the MIC Core and as an example, the MIC GUI (App Board) uses these API's in order to give you a full blown graphical user interface. You can use the API to create your custom GUI or to integrate MIC functionality in existing web based applications that you might have. Telenor Start IoT also offers a complete open source GUI that shows you how the API is used. In the near future MIC will also support [GraphQL](https://graphql.org/) support as an alternative to the REST API. GraphQL is a great tool if you want to create highly responsive GUI's.

## Security and Scalability
MIC has been designed with a security first mindset and building your IoT service on top of MIC gives you all you need to make sure that your IoT application is best in class related to security. MIC is designed with scalability in mind and utilizes stateless microservices (AWS Lambda), low cost and scalable storage (AWS S3) in order to ensure that your future scalability needs are met in a cost effective manner.

## Focus on Your Business Case
MIC allows you to focus on your use and business case. You can put all your effort into what matters for your service and the frontend(s) you want to expose to your end users.

These are some of the features included in the Managed IoT Cloud suite. We hope you now got an overview of what's in store. Next we'll start by setting up an IoT device.
