---
description: Step-by-step guide for installing and using the SDK.
---

# Getting started with the emnify Python SDK

## Installation

### Requirements

- Python ([version 3.6.0](https://www.python.org/downloads/release/python-360/) or higher)

### Install from source code

```bash
git clone https://github.com/emnify-python-sdk.git emnify-sdk
cd emnify-sdk
python setup.py install
```

### Install via PyPi

```bash
pip install emnify-sdk
```

## Configuration

### Create an application token

In order to use the Python SDK, you need to create your application token via: 

- [emnify Portal](https://portal.emnify.com/)
- [emnify REST API](https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication) 

Once created, you'll apply it to initiate the SDK.

### Use in code

```python
TOKEN = '<PASTE YOUR APPLICATION TOKEN HERE>'

# Import the package
from emnify import EMnify

# Initiate the SDK instance using your application token
emnify = EMnify(TOKEN)

# Execute a command against the desired API
devices = emnify.devices.get_devices_list()

# Show all the devices
print([device for device in devices])
```

## Explore more 

Now when you have the SDK configured, it's time to learn what you can do with it.

If you're new to IoT Connectivity and emnify, it makes sense to start with learning [Concepts](concepts). 
<!-- TODO: Replace with new documentation link once launched -->
Visit our [*Developers Hub*](https://www.emnify.com/developers/documentation) to learn more. 

Once you're comfortable with [Concepts](concepts), you can explore use cases showing what the SDK is capable of in [Examples](examples). 

Also see the [*emnify System Documentation*](https://cdn.emnify.net/api/doc/index.html) and [our OpenAPI Specification](https://cdn.emnify.net/api/doc/swagger.html).
