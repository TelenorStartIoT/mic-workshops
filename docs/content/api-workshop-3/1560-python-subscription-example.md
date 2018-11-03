---
title: Python subscription example
url: api-workshop-3/python-subscription-example/
weight: 1550
menu:
  api:
    parent: "Workshop 3: MQTT Realtime"
    identifier: MQTT Python Subscription Example
---
Here is also an example in Python that shows how you can setup MQTT subscription (using the things X509 certificate). You will have to download the certificate file for the things that you want to listen (subscribe) to from MIC. The example below shows how to do it on two different things but you can add more things if you wish by doing copy/paste of the relevant code parts.

```python
# coding: latin-1
import sys
import json, requests
import xml.etree.ElementTree as ET
import calendar
from requests.auth import HTTPBasicAuth
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
import time

def customCallback(client, userdata, message):
	# Do whatever you want to do with the received data here
	print userdata
	

# Set up MQTT connection to 00001172
myAWSIoTMQTTClient1 = AWSIoTMQTTClient("00001172")
myAWSIoTMQTTClient1.configureEndpoint("a3k7odshaiipe8.iot.eu-west-1.amazonaws.com", 8883)
priv_key_name = "./00001172/privkey.pem"
cert_key_name = "./00001172/cert.pem"
myAWSIoTMQTTClient1.configureCredentials("./root.pem", priv_key_name, cert_key_name)
myAWSIoTMQTTClient1.connect()
myAWSIoTMQTTClient1.subscribe("$aws/things/00001172/shadow/update", 1, customCallback)

# Set up MQTT connection to 00001173
myAWSIoTMQTTClient2 = AWSIoTMQTTClient("00001173")
myAWSIoTMQTTClient2.configureEndpoint("a3k7odshaiipe8.iot.eu-west-1.amazonaws.com", 8883)
priv_key_name = "./00001173/privkey.pem"
cert_key_name = "./00001173/cert.pem"
myAWSIoTMQTTClient2.configureCredentials("./root.pem", priv_key_name, cert_key_name)
myAWSIoTMQTTClient2.connect()
myAWSIoTMQTTClient2.subscribe("$aws/things/00001173/shadow/update", 1, customCallback)

while True:
	time.sleep(1)

```
