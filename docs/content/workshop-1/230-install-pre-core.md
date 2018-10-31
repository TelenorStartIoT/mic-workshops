---
title: Install Pre-Release Core
url: workshop-1/install-pre-core/
weight: 230
menu:
  main:
    parent: "Workshop 1: Arduino IDE"
    identifier: "Install Pre-Release Core"
---

In order to install the pre-release core, you need to decompress the supplied `ArduinoCore-samd-newboards.zip` in the hardware section of your sketchbook folder.

{{< note title="Sketchbook Folder Location" >}}
* **Windows:** This PC\Documents\Arduino
* **Mac:** $HOME/Documents/Arduino
* **GNU/Linux:** $HOME/Arduino
{{< /note >}}

* Create a new folder `hardware/arduino-new` in your sketchbook folder. If neither the `hardware` nor `arduino-new` folder exists, create them.
* Uncompress the contents of `ArduinoCore-samd-newboards.zip` in the previously created folder.
* Rename the uncompressed folder `samd`.

![SAMD Folder](/images/arduino-mkr-nb-1500-06-samd-folder.png "SAMD Folder")

* Open the Arduino IDE and go to `Boards Manager` to reload the index.
* Select board `Arduino MKR NB 1500` by going to **Tools ⟶ Board ⟶ Arduino MKR NB 1500**
* Verify that you've selected the correct board by looking in the bottom right corner of the IDE.

![Verify Board](/images/arduino-mkr-nb-1500-06-verify-board.png "Verify Board")
