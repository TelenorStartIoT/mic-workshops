---
title: Send Packet
url: workshop-3/send/
weight: 550
menu:
  main:
    parent: "Workshop 4: Program the Device"
    identifier: Send Packet
---

Implement the `sendMICUDPpacket()` function:

```cpp
unsigned long sendMICUDPpacket(IPAddress& address) {
  String p1, p2, p3, p4, payload = "";
  String comma = ",";
  float hum, tmp, r = 0.0;

  p1 = "Hello";
  hum = 24;
  r = random(0, 9);
  r = r / 10;
  hum = hum + r;
  p2 = hum;
  tmp = 20;
  r = random(0, 9);
  r = r / 10;
  tmp = tmp + r;
  p3 = tmp;

  payload = p1 + comma + p2 + comma + p3;
  Serial.println("payload is: " + payload);
  Udp.beginPacket(address, MICUdpPort);
  Udp.write(payload.c_str(), payload.length());
  Udp.endPacket();
}
```

MIC support all types of payloads, but you need to introduce an uplink transform in MIC for your `Thing Type` to match the  structure of your payload.
