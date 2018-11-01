---
title: NB-IoT Architectural Overview
url: get-started/architectural-overview/
weight: 140
menu:
  main:
    parent: Get Started
    identifier: architectural-overview
---
## Developers first

The Telenor Start IoT initiative has taken a _**developer first**_ approach and has set up everything you need to get started with NB-IoT development and integrated it with the MIC platform used in the initiative. The next two paragraphs illustrates how this has been done. Feel free to skip reading it, it is just for your information :-)


## Telenor LTE architecture and NB-IoT
If you just buy NB-IoT/Cat M1 SIM cards you will have to either use the open _**telenor.iot**_ Access Point Name (APN) or set up a private APN.

![Simplified Telenor LTE infrastructure](/images/architectural-overview-00-cellular-architecture.png "The LTE cellular network architecture")

In the image above the PGW is where the traffic leaves the Telenor cellular network. This is where we can create named Access Points (APN´s). UA (User Equipment) is your device.

If you use the open API the traffic is not encrypted when it leaves the cellular network provided by Telenor. If you want a private APN you will have to make an agreeemnt with Telenor (and pay extra for it). With a private APN you will also have to host (or pay for hosting of) a [RADIUS] (https://en.wikipedia.org/wiki/RADIUS) server for authentication and authorisation of your devices. If you want the traffic to be encrypted you will also have to set up an IPSec VPN tunnel (In Norway, Telenor sells this branded as Telenor MDA Go).

When you use the Start IoT initiative offering this has been set up for you.

## Horde and MIC
The Horde platform component  (including the Radius server) has been developed by Telenor Exploratory Engineering. The Managed IoT Cloud platform has been developed by Telenor Connexion. Telenor Start IoT puts this together as the figure below shows.

![Telenor Start IoT NB-IoT developer architecture](/images/architectural-overview-01-developer-architecture.png "The LTE cellular network architecture")
