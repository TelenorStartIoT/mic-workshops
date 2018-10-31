---
title: Manifest
url: manifest/
weight: 1210
---

Managed IoT Cloud (MIC) is always deployed as a stack of services running on AWS. This means that for each stack, there will always be non-static variables such as API keys and endpoints. MIC utilizes [AWS Lambda](https://aws.amazon.com/lambda/) functions for business logic. This is what's called a "serveless stack", since there are no traditional servers involved. Each each of these Lambdas has a unique identifier. So how do an aplication keep track of all these endpoints and configurations that are different for each stack?

## Stack Manifest

MIC exposes a single static endpoint that is the same regardless of which stack you're using. By calling this endpoint and providing your stack URL, you'll get a complete list of non-static variables for your current stack. This document is what's called the `Manifest`.

During the workshops you'll get asked to insert different configuration variables. These variables are sourced from the Manifest of your current stack.

## Retrieving the Manifest

The static endpoint for retrieving the Manifest is:

```
https://1u31fuekv5.execute-api.eu-west-1.amazonaws.com/prod/manifest/?hostname=<STACK HOST>
```

You need to replace `<STACK HOST>` with your current stack URL.

E.g. to retrieve the Manifest for `startiot.mic.telenorconnexion.com`:

[https://1u31fuekv5.execute-api.eu-west-1.amazonaws.com/prod/manifest/?hostname=startiot.mic.telenorconnexion.com](https://1u31fuekv5.execute-api.eu-west-1.amazonaws.com/prod/manifest/?hostname=startiot.mic.telenorconnexion.com)

## What to do with the Manifest?

When creating an application you typically take one of these two approaches;

- Hard-code the manifest in your source code (and hope it doesn't change)
- Fetch the manifest once at launch and store it for consecutive API calls
