---
title: Loop
url: workshop-3/loop/
weight: 530
menu:
  main:
    parent: "Workshop 4: Program the Device"
    identifier: Loop
---

Continue by adding the following code inside the `loop()` section:

```cpp
void loop() {
  int size = 0;
  
  Serial.print("Send packet to MIC: ");
  sendMICUDPpacket(MIC_IP);
  Serial.println("Check if we have received something..");
  size = receiveMICUDPpacket();
  if (size > 0) {
    Serial.println("Received packet...");
    String bufferString = String((char *) packetBuffer);
    Serial.println("Packet data is: <" + bufferString + ">");
  } else {
    Serial.println("No data received...");
  }
  // Wait 30 seconds before Sending again
  Serial.println("Wait 30s before sending again....");
  delay(30000);
}
```
