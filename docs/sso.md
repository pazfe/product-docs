---
sidebar_position: 9
---

# Single Sign-On

With Single Sign-On (SSO) enabled, members of your organization with access to the EMnify portal will be able to log in using their Microsoft Business account credentials.

### Setup SSO with Microsoft Active Directory

**Prerequisites:**

- An Azure Subscription with an Active Directory license
- An account in the EMnify portal using the same email address as the one used to sign in to Microsoft Azure

:::caution
If your email address used in the EMnify portal is not the same as the one used to login to Azure, this setup will not work.
Instead, add an additional user to the EMnify portal with `Administrator` privileges.
:::

#### SSO with Microsoft

Log into Azure and navigate to Azure Active Directoring in the left sidebar.
![Navigate to Azure Active Directory](./assets/sso_azure_active_directory.png)

At the top of the page, click on `+ Add` and then `App Registration`.
![under add, click on app registration](./assets/sso_app_registration_s2.png)

- Give it a **name** (i.e. `EMnify`)
- The **Supported Account Types** should be **Multi Tenant**.
This will request for a consent screen on IDP verification in the portal later.
    
- Set the Redirect URI to type `Web` with the value: `[https://prod-e5.okta.com/oauth2/v1/authorize/callback](https://prod-e5.okta.com/oauth2/v1/authorize/callback)`
![Configure app registration details](./assets/sso_app_registration_details_s3.png)
    

Navigate to **Authentication** in the left sidebar, and in the section **Implicit grand and hybrid flows** enable `Access Tokens` and `ID Tokens`.
![SSO authentication settings](./assets/sso_authentication_settings_s4.png)

Go to **Token configuration** in the left sidebar, click on **Add optional claim** and under **SAML** enable to `upn` claim.
Leave the option **Turn on the Microsoft Graph profile** permission unchecked.
![SSO token configuration](./assets/sso_token_configuration_s5.png)

Head to **API permissions** in the left sidebar, click on the existing permission entry **Microsoft Graph (1)** and check the `email` and `profile` OpenID permissions.
![set api permissions](./assets/sso_api_permissions_s6.png)

Your configuration should look like this:
![api permission configuration](./assets/sso_api_permissions_s7.png)

In the left sidebar, go to **Expose an API** and click on `Set` and then click on `save`.
![set expose an api](./assets/sso_expose_api_s8.png)

After navigating to **Certificates & Secrets** in the left sidebar, click on `New client secret`.
![new client secret](./assets/sso_new_client_s10.png)

Copy the **Value** and save it to a secure location.
This value will not be shown again in the portal.
Choose an expiration date and mark our calendar to generate and configure a new secret right before it expires.
![copy security certificate value](./assets/sso_new_client_s11.png)

Navigate to **Overview** in the sidebar and copy the `Application (client) ID` field for later use in the EMnify portal.
![copy application id](./assets/sso_copy_application_id_s12.png)

#### Configure the EMnify Portal

Login to your EMnify account, go to organization settings in the topbar, and click on **Single Sign-On**.
![EMnify portal sso settings](./assets/sso_org_settings_s13.png)

If you do not already have SSO enabled for your account, contact support and request that it be enabled.
![get support to enable sso for your account](./assets/sso_get_support_s14.png)

Otherwise, click on **Add** under the Microsoft SSO provider.
![add microsoft sso](./assets/sso_add_s15.png)

Fill in the ``Application (client) ID and the `Secret Value`` that you copied earlier, then click **Create and Activate**.
![create and activate](./assets/sso_create_activate_s16.png)

The final step is to verify the provider.
SSO will not be configured until you complete this step.
Click on **Verify Integration** and follow the prompts.
![verify the sso provider](./assets/sso_verify_s17.png)

#### Troubleshooting

In the unlikely event that the provider could not be configured on the very first attempt, check the following:

- If the user receives a "User cancelled social login", check if the application registration is set to Multi-tenant.
- Is the user part of the Azure Tenant?
- Is the user part of the EMnify enterprise?
- Is the user enabled?
- Try again using incognito tab.
