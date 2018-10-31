---
title: "Workshop 5: Uplink Transform"
url: workshop-5/
weight: 610
---

To edit the uplink transfor for your Thing Type, select your Thing Type and click the pencil button.

Insert the following JavaScript code into the Uplink Transform section:

```javascript
var variables = payload.toString('ascii').split(",");
var tmpFloat = parseFloat(variables[1]);
var humFloat = parseFloat(variables[2]);

return {
   payload: payload.toString('utf-8'),
   text: variables[0],
   humidity: humFloat,
   temperature: tmpFloat,
   timestamp: + new Date()
};
```

![Uplink Transform](/images/arduino-mkr-nb-1500-10-uplink-transform.jpg "Uplink Transform")
