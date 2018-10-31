---
title: "Workshop 2: IMSI and IMEI"
url: workshop-2/
weight: 310
---

The next step is to load a sketch that allows you to send AT (**at**tention) commands directly to the modem on the board.

Load the following sketch and upload it to your device.

```cpp
// baud rate used for both Serial ports
unsigned long baud = 115200;

void setup() {
  // reset the ublox module
  pinMode(SARA_RESETN, OUTPUT);
  digitalWrite(SARA_RESETN, HIGH);
  delay(100);
  digitalWrite(SARA_RESETN, LOW);

  Serial.begin(baud);
  SerialSARA.begin(baud);
}

void loop() {
  if (Serial.available()) {
    SerialSARA.write(Serial.read());
  }

  if (SerialSARA.available()) {
    Serial.write(SerialSARA.read());
  }
}
```

Open the serial monitor and type the following command to get the `IMSI` and `IMEI` numbers.

![AT commands to get IMSI and IMEI](/images/arduino-mkr-nb-1500-08-at-serial.png "AT commands to get IMSI and IMEI")

If you're not getting any output, check that you have the correct `baud`-rate and `new line / carriage return` setting.

{{< note title="Leave the serial monitor open" >}}
You'll need to copy these numbers when we provision the device in MIC.
{{< /note >}}
