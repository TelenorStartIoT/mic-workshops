---
title: Receive Packet
url: workshop-3/receive/
weight: 540
menu:
  main:
    parent: "Workshop 4: Program the Device"
    identifier: Receive Packet
---

Implement the `receiveMICUDPpacket()` function:

```cpp
int receiveMICUDPpacket() {
  int size = 0;
  
  size = Udp.parsePacket();
  // Check if size is larger than 0, if yes we have received something
  if ( size > 0) {
    Serial.println("packet received");
    // We've received a packet, read the data from it
    Udp.read(packetBuffer, size); // read the packet into the buffer
    return(size);
  }
}
```
