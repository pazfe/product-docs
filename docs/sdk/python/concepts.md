# Concepts

## SDK Glossary

| Name      | Description |
| --------- | ----------- |
| Device    | Represents any physical device that can be supplied with a SIM and obtain connectivity. Don't mix up Device and Endpoint, the difference is Device is a superset of the Endpoint and SIM acting as whole. [Learn more about devices](https://support.emnify.com/hc/en-us/sections/115000981005-Device-Configuration).  |
| Device Status | Use it as your primary way to control connectivity. It can be either **Enabled** or **Disabled**. When **Enabled**, a Device that has a SIM assigned can go online. On other hand, when **Disabled**, Device doesn't get any service. |
| SIM    | Represents a physical or eSIM that is issued by emnify. [Learn more about SIM cards](https://support.emnify.com/hc/en-us/sections/360000642374-SIM-cards).  |
| SIM Status    | Status of the SIM that represents [SIM lifecycle](https://www.emnify.com/blog/sim-lifecycle-management). When using the SDK, avoid changing the SIM status directly. Rather, via changing the device status.   |
| Tariff Profile    | Controls where and how your devices has coverage. In the Enterprise Portal, it's referenced as **Coverage Policy**. [Learn more about tariff profiles](https://cdn.emnify.net/api/doc/tariff-profile.html). |
| Service Profile    | Defines available services (e.g., SMS, 4G, etc.) and traffic limits for a device. In the Enterprise Portal, it's referenced as **Service Policy**. [Learn more about service profiles](https://cdn.emnify.net/api/doc/service-profile.html). |
| Blacklist Operators    | Is a method that allows you to restrict connectivity of a Device to a specific Operator or a group of Operators.  |
| Operator    | Represents an underlying mobile network operator (MNO) that is used to provide you with connectivity. You can explore operators coverage by countries and regions on [our Pricing page](https://www.emnify.com/pricing).  |
| SMS    |  [Learn more about SMS](https://www.emnify.com/developers/documentation#_sms).  |
| Application Token    | Your identity to use emnify SDK and API.   |

:::tip
<!-- TODO: Replace with new documentation link once launched -->
Find the [complete Developer Glossary](https://www.emnify.com/developers/documentation#_glossary) in the *Developer Hub*. 
:::

