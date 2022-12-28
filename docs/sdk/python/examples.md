# Examples

## Get your first devices online

In order to get your devices online, you need to perform a set of steps below. 
This example demonstrates complex operation across multiple SDK [Concepts](concepts).

- [Device Policies](https://portal.emnify.com/device-policies) that configure which services are available and where
- You can [learn more about APN configuration via SMS](https://support.emnify.com/hc/en-us/articles/4401906757906-How-to-configure-the-APN-on-different-devices)
- SIM Registration
- Device Creation
- SIM Assignment
- Error Handling
- Retrieve Device Details
- Device Activation/Deactivation

```python title="mass_sim_activation.py"
from emnify import EMnify
from emnify import constants
from emnify.errors import EMnifyBaseException

# === Example: Getting First Devices Online ===

# To operate EMnify SDK you need to generate application token.
# That is how: https://www.emnify.com/developer-blog/how-to-use-an-application-token-for-api-authentication
token = input('token: ')
# The client is authorized to perform operations by your name;
emnify_client = EMnify(token)

# There are two things you need to obtain before you get you device online,
# one is a device and other is a SIM card.
# For this example we assume you have a batch of SIM cards you willing to
# use in your devices.
sim_batch_BIC2 = input('BIC2: ')

# EMnify allows you to control coverage and services you need.
# Lookup Concepts to learn more.
# https://portal.emnify.com/device-policies you can find IDs there.
service_profile_id = input('Service Profile ID: ')
tariff_profile_id = input('Tariff Profile ID: ')
# In order to create devices for SIMs afterwards we need service and coverage profiles.
service_profile = emnify_client.devices.service_profile_model(id=int(service_profile_id))
tariff_profile = emnify_client.devices.tariff_profile_model(id=int(tariff_profile_id))

try:
    # Having a batch of SIM cards you need to add them to your account;
    # This method also supports single sim registration via BIC1,
    # so you can use your FREE Evaluation SIM cards either;
    issued_sims = emnify_client.sim.register_sim(bic=sim_batch_BIC2)
    # After it's added - all sim`s are registred with "issued" status;
except EMnifyBaseException as e:
    # It can happen that there is some error appear during SIM registration;
    # Use EMnifyBaseException for general exceptions or inherited classes for specific one`s;
    raise AssertionError(f"error during sim batch BIC2 activation{e}")

# We define status of device to be applied during creation.
device_status = emnify_client.devices.status_model(
    **constants.DeviceStatuses.ENABLED_DICT.value
)


for sim in issued_sims:
    # SIM cards do not provide connectivity by just registering them,
    # So in order to get devices you put SIM cards in you also need to
    # create a new device with the SIM assigned.

    # For device creation we need to specify parameters of the device:
    device_name = f"Device({sim.iccid})"
    device_model = emnify_client.devices.device_create_model(
        tariff_profile=tariff_profile,
        status=device_status,
        service_profile=service_profile,
        sim=sim,
        name=device_name
    )
    # See API Reference to learn other parameters the device can have.

    # And there is how we create a device we wanted.
    device_id = emnify_client.devices.create_device(device=device_model)

    # After creation we may retrieve full device information.
    # Which you can store in your local inventory for future needs.
    device = emnify_client.devices.retrieve_device(device_id=device_id)

    # As it mentioned above by default connectivity is disabled so you're not getting billed.
    # The following command will enable connectivity for your device with a SIM card installed.
    emnify_client.devices.change_status(enable=True, device=device)
    # At this point EMnify is ready to provide you connectivity services.
    # So we can already send and receive SMS(if this enabled in the Service Profile assigned).

    # After making sure device is created and enabled
    # it is time to perform configuration on a device side.

    # Correct APN configuration of the device is required to access internet.
    # EMnify APN is(no spaces, just two characters): em
    # For example purposes we will send a special configuration SMS command.
    # It may vary by the device manufacturer, see our documentation to learn
    # if this method suites your devices.
    ACTIVATION_CODE = 'AT+CGDCONT=1,"IP","em",,'
    SENDER = "city_scooters_admin"

    activation_sms = emnify_client.devices.sms_create_model(
        payload=ACTIVATION_CODE,
        source_adress=SENDER
    )

    # And now we send the configuration SMS to our device.
    emnify_client.devices.send_sms(device=device, sms=activation_sms)

    # CONGRATULATIONS! You get your device online!
    # Now you can check your device internet access.
```

## Device lifecycle management

### Initialization of SDK client

```python title="device_lifecycle_management.py"
from emnify import EMnify
from emnify import constants as emnify_constants

emnify = EMnify(app_token='your token')
# [endblock]
#  === Create and activate a device ===


unassigned_sims = [i for i in emnify.sim.get_sim_list(without_device=True)]
#  If no unassigned_sims - register new one by batch code
if not unassigned_sims:
    registered_sim = emnify.sim.register_sim(bic='sample_bic_code')  # Returns as list
    sim = emnify.sim.retrieve_sim(registered_sim[0].id)
else:
    sim = unassigned_sims[0]  # Taking the first one unassigned sim

# Defining of new device parameters
# All required models can be retrieved through manager`s properties
service_profile = emnify.devices.service_profile_model(id=1)
tariff_profile = emnify.devices.tariff_profile_model(id=1)
device_status = emnify.devices.status_model(id=0)
name = 'new_device'
device_model = emnify.devices.device_create_model(
    tariff_profile=tariff_profile,
    status=device_status,
    service_profile=service_profile,
    sim=sim,
    name=name
)

# After creating model sdk returns id of device
device_id = emnify.devices.create_device(device=device_model)
# Then we can retrieve all device details
device = emnify.devices.retrieve_device(device_id=device_id)
# Activate device
emnify.devices.change_status(device=device, enable=True)

# Retrieving updated device details
device = emnify.devices.retrieve_device(device_id=device_id)
device_status = device.status.description  # Will be 'Enabled'
sim_status = device.sim.status.description  # Will be 'Activated'
# [endblock]

#  === Configure a device ===

#  Getting details of device
device = emnify.devices.retrieve_device(device_id=device_id)

tags = 'arduino, meter, temp'  # Sample tags
name = 'new name'  # Sample name

# Adjust device config
update_device_fields = emnify.devices.device_update_model(name='new name', tags='arduino')
emnify.devices.update_device(device_id=device.id, device=update_device_fields)

#  Getting details of updated device
updated_device = emnify.devices.retrieve_device(device_id=device_id)
device_tags = updated_device.tags  # Will be arduino
deivce_name = updated_device.name  # Will be 'new name'
# [endblock]

#  === Configure operator blacklist for device ===

# List of all operators
all_operators = [i for i in emnify.operator.get_operators()]

device_id = 0  # Your device id
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[0].id, device_id=device_id)
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[1].id, device_id=device_id)
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[2].id, device_id=device_id)
# Adding 3 operators to the blacklist

device_blacklist = emnify.devices.get_device_operator_blacklist(device_id=device_id)
# Getting all blacklist operators of device by device_id

operator_id = 0
for operator in device_blacklist:
    print(operator.country)
    print(operator.id)
    print(operator.mnc)
    operator_id = operator.id

emnify.devices.delete_device_blacklist_operator(device_id=device_id, operator_id=operator_id)
# Removing the last operator from blacklist
# [endblock]

#  === Disable device ===

device_filter = emnify.devices.get_device_filter_model(status=emnify_constants.DeviceStatuses.ENABLED_ID.value)
all_devices_with_sim = [
    device for device in emnify.devices.get_devices_list(filter_model=device_filter) if device.sim
]
# Getting list of all devices with sim cards and enabled status

device = all_devices_with_sim[0]

emnify.devices.change_status(disable=True, device=device.id)
# Disable a device

disabled_device = emnify.devices.retrieve_device(device_id=device.id)
device_status = disabled_device.status.description  # Will be 'Disabled'
sim_status = disabled_device.sim.status.description # Will be 'Suspended'
# [endblock]

#  === Delete device ===

old_devices_list = [device for device in emnify.devices.get_devices_list()]
# Getting list of all devices

device_to_delete = list(
        filter(
            lambda device: device.sim and device.status.id == emnify_constants.DeviceStatuses.ENABLED_ID,
            old_devices_list
        )
)[0]
# Picking up a device to delete with assigned sim and enabled status

sim_id_of_deleted_device = device_to_delete.sim.id

emnify.devices.delete_device(device_id=device_to_delete.id)
# Deleting a device

new_device_list = [device for device in emnify.devices.get_devices_list()]
# Getting new list of all devices


assert len(old_devices_list) > len(new_device_list)
# After deleting count of all devices will be lowered

sim = emnify.sim.retrieve_sim(sim_id=sim_id_of_deleted_device)
sim_status = sim.status.description  # Will be 'Suspended'

# [endblock]


#  === Manage device connectivity ===

# Lookup for documentation for learn more
# https://www.emnify.com/developer-blog/5-ways-to-detect-and-solve-connectivity-issues#network-events

# There are many reasons why connection issues arise. For example:
# * The device executes the wrong procedures due to a bad firmware update.
# * The device executes network registration too frequently that the network no longer allows it to register.
# * You have simply changed a policy due to a blocked device.

# For resetting a device connectivity you can use the following methods:
# * Resetting the connectivity of device
device_id = 0
emnify.devices.reset_connectivity_data(device_id=device_id)
# * Resetting the connectivity
emnify.devices.reset_connectivity_network(device_id=device_id)

# For checking connectivity you can use the method:
connectivity = emnify.devices.get_device_connectivity_status(device_id=device_id)
print(connectivity.status.description)  # Will be 'ATTACHED'/'ONLINE'/'OFFLINE'/'BLOCKED'

# [endblock]
```

### Create and activate a device

- Device Creation
- SIM Registration
- List SIMs
- Retrieve Device Details
- Device Activation/Deactivation

```python title="device_lifecycle_management.py"
from emnify import EMnify
from emnify import constants as emnify_constants

emnify = EMnify(app_token='your token')
# [endblock]
#  === Create and activate a device ===


unassigned_sims = [i for i in emnify.sim.get_sim_list(without_device=True)]
#  If no unassigned_sims - register new one by batch code
if not unassigned_sims:
    registered_sim = emnify.sim.register_sim(bic='sample_bic_code')  # Returns as list
    sim = emnify.sim.retrieve_sim(registered_sim[0].id)
else:
    sim = unassigned_sims[0]  # Taking the first one unassigned sim

# Defining of new device parameters
# All required models can be retrieved through manager`s properties
service_profile = emnify.devices.service_profile_model(id=1)
tariff_profile = emnify.devices.tariff_profile_model(id=1)
device_status = emnify.devices.status_model(id=0)
name = 'new_device'
device_model = emnify.devices.device_create_model(
    tariff_profile=tariff_profile,
    status=device_status,
    service_profile=service_profile,
    sim=sim,
    name=name
)

# After creating model sdk returns id of device
device_id = emnify.devices.create_device(device=device_model)
# Then we can retrieve all device details
device = emnify.devices.retrieve_device(device_id=device_id)
# Activate device
emnify.devices.change_status(device=device, enable=True)

# Retrieving updated device details
device = emnify.devices.retrieve_device(device_id=device_id)
device_status = device.status.description  # Will be 'Enabled'
sim_status = device.sim.status.description  # Will be 'Activated'
# [endblock]
```

### Configure a device

If you want to avoid using a specific operator to avoid unintentional spending on the device, you can add it to the blacklist of the device.

```python title="device_lifecycle_management.py"
#  === Configure a device ===

#  Getting details of device
device = emnify.devices.retrieve_device(device_id=device_id)

tags = 'arduino, meter, temp'  # Sample tags
name = 'new name'  # Sample name

# Adjust device config
update_device_fields = emnify.devices.device_update_model(name='new name', tags='arduino')
emnify.devices.update_device(device_id=device.id, device=update_device_fields)

#  Getting details of updated device
updated_device = emnify.devices.retrieve_device(device_id=device_id)
device_tags = updated_device.tags  # Will be arduino
deivce_name = updated_device.name  # Will be 'new name'
# [endblock]
```

### Configure operator blacklist for device

```python title="device_lifecycle_management.py"
#  === Configure operator blacklist for device ===

# List of all operators
all_operators = [i for i in emnify.operator.get_operators()]

device_id = 0  # Your device id
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[0].id, device_id=device_id)
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[1].id, device_id=device_id)
emnify.devices.add_device_blacklist_operator(operator_id=all_operators[2].id, device_id=device_id)
# Adding 3 operators to the blacklist

device_blacklist = emnify.devices.get_device_operator_blacklist(device_id=device_id)
# Getting all blacklist operators of device by device_id

operator_id = 0
for operator in device_blacklist:
    print(operator.country)
    print(operator.id)
    print(operator.mnc)
    operator_id = operator.id

emnify.devices.delete_device_blacklist_operator(device_id=device_id, operator_id=operator_id)
# Removing the last operator from blacklist
# [endblock]
```

### Disable device

```python title="device_lifecycle_management.py"
#  === Disable device ===

device_filter = emnify.devices.get_device_filter_model(status=emnify_constants.DeviceStatuses.ENABLED_ID.value)
all_devices_with_sim = [
    device for device in emnify.devices.get_devices_list(filter_model=device_filter) if device.sim
]
# Getting list of all devices with sim cards and enabled status

device = all_devices_with_sim[0]

emnify.devices.change_status(disable=True, device=device.id)
# Disable a device

disabled_device = emnify.devices.retrieve_device(device_id=device.id)
device_status = disabled_device.status.description  # Will be 'Disabled'
sim_status = disabled_device.sim.status.description # Will be 'Suspended'
# [endblock]
```

### Delete device

```python title="device_lifecycle_management.py"
#  === Delete device ===

old_devices_list = [device for device in emnify.devices.get_devices_list()]
# Getting list of all devices

device_to_delete = list(
        filter(
            lambda device: device.sim and device.status.id == emnify_constants.DeviceStatuses.ENABLED_ID,
            old_devices_list
        )
)[0]
# Picking up a device to delete with assigned sim and enabled status

sim_id_of_deleted_device = device_to_delete.sim.id

emnify.devices.delete_device(device_id=device_to_delete.id)
# Deleting a device

new_device_list = [device for device in emnify.devices.get_devices_list()]
# Getting new list of all devices


assert len(old_devices_list) > len(new_device_list)
# After deleting count of all devices will be lowered

sim = emnify.sim.retrieve_sim(sim_id=sim_id_of_deleted_device)
sim_status = sim.status.description  # Will be 'Suspended'

# [endblock]
```

### Filtering and sorting

```python title="filtering_and_sorting.py"

# === Using a Filtering for List calls  ===
from emnify import EMnify
from emnify import constants as emnify_constants

emnify_client = EMnify(app_token='your_application_token')

# Some methods that return multiple objects allow sorting and filtering.
# This allows us to optimize processing time, since using filtering we can immediately get the necessary objects with
# the necessary qualities, and sorting allows us to set the order in which objects are displayed.
# Instead of sending several requests in search of the required object, we can reduce their number to one.

# For example - we want to find all SIM`s with specific customer organisation, first one for instance.
# We need to initiate the model for filtering by specifying the necessary parameters in it as arguments.
sim_filter = emnify_client.sim.get_sim_filter_model(customer_org=1)
# To get the filtering model for filling, you need to get it as a property of a manager
# for SIM cards, this would be get_sim_filter_model, for Devices it would be a get_device_filter_model

# After initializing the model object, it must be passed as an argument that makes a request to get a list of objects.
sims = emnify_client.sim.get_sim_list(filter_model=sim_filter)
# sims now contains the objects we need with client organization 1

# We can pass several parameters for filtering for a more detailed search for the necessary objects.
sim_filter = emnify_client.sim.get_sim_filter_model(
    customer_org=1,
    status=emnify_constants.SimStatusesID.ACTIVATED_ID.value,
    production_date='2019-01-25'
)

# The request to get a list of SIM cards also has a separate filter,
# which is passed as an argument to the filtering function - without a device.

sims_without_assigned_device = emnify_client.sim.get_sim_list(without_device=True)


# === Using a Sorting for List calls  ===
# Just like filtering, sorting allows us to reduce processing time by ordering objects in the server.
# Thus, it is easier for you to group objects according to a certain attribute by specifying it in sorting.

# For example - we want to get all devices sorted by last updated date
# All sorting is done by using enums
sort_parameter = emnify_client.devices.get_device_sort_enum.LAST_UPDATED.value

# After choosing a parameter for filtering, we need to pass it as an argument sort_enum
sorted_devices = emnify_client.devices.get_devices_list(
    sort_enum=sort_parameter
)

# Now we got a list of devices, at the beginning of which are the recently updated devices
for latest_device in sorted_devices:
    ...
```

### Manage device connectivity

[Connectivity troubleshooting](https://www.emnify.com/developer-blog/5-ways-to-detect-and-solve-connectivity-issues#network-events)

```python title="device_lifecycle_management.py"
#  === Manage device connectivity ===

# Lookup for documentation for learn more
# https://www.emnify.com/developer-blog/5-ways-to-detect-and-solve-connectivity-issues#network-events

# There are many reasons why connection issues arise. For example:
# * The device executes the wrong procedures due to a bad firmware update.
# * The device executes network registration too frequently that the network no longer allows it to register.
# * You have simply changed a policy due to a blocked device.

# For resetting a device connectivity you can use the following methods:
# * Resetting the connectivity of device
device_id = 0
emnify.devices.reset_connectivity_data(device_id=device_id)
# * Resetting the connectivity
emnify.devices.reset_connectivity_network(device_id=device_id)

# For checking connectivity you can use the method:
connectivity = emnify.devices.get_device_connectivity_status(device_id=device_id)
print(connectivity.status.description)  # Will be 'ATTACHED'/'ONLINE'/'OFFLINE'/'BLOCKED'

# [endblock]
```
