// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    'cellular-iot',
    {
      type: 'category',
      label: 'Quickstart',
      link: {
        type: 'generated-index',
        title: 'Quickstart guide',
        slug: 'quickstart',
        description: 'Resources for your successful IoT cellular deployment with emnify',
      },
      items: [
        'quickstart/getting-started',
        'quickstart/registering-sims',
        {
          type: 'category',
          label: 'Devices',
          link: {
            type: 'generated-index',
            title: 'Devices',
            slug: 'devices',
            description: 'How to create and configure various types of devices.',
          },
          items: [
            'quickstart/devices/creating-a-device',
            'quickstart/devices/getting-the-first-device-online',
            'quickstart/devices/android',
            'quickstart/devices/ios-devices',
            'quickstart/devices/cellular-modules',
            'quickstart/devices/gps-trackers',
            'quickstart/devices/industrial-routers',
          ],
        },
        'quickstart/troubleshooting',
      ],
    },
    'service-stack-overview',
    'services',
    'rest-api',
    {
      type: 'category',
      label: 'Data Streamer',
      link: { 
        type: 'generated-index', 
        title: 'emnify multicloud Data Streamer',
        slug: 'data-streamer'
      },
      items: [
        {
          type: 'doc',
          label: 'Getting started',
          id: 'data-streamer/getting-started'
        },
        'data-streamer/connection-types',
        'data-streamer/stream-types',
        'data-streamer/managing-data-streams',
        'data-streamer/usage',
        'data-streamer/available-integrations'
      ],
    },
    {
      type: 'category',
      label: 'Events',
      link: {
        type: 'generated-index', 
        title: 'emnify system events',
        slug: '/events'
      },
      items: [
        {
          type: 'doc',
          label: 'Getting started',
          id: 'events/getting-started'
        },
        'events/event-types',
        'events/mno-events',
        'events/usage'
      ]
    },
    {
      type: 'category',
      label: 'Software Development Kits',
      link: { 
        type: 'generated-index', 
        title: 'emnify SDKs',
        description: 'The emnify software development kits (SDKs) allow developers to manage their IoT devices using an intuitive set of APIs, including SIM state management and device connectivity operations.',
        slug: '/sdks'
      },
      items: [
        {
          type: 'category',
          label: 'Python',
          link: { 
            type: 'generated-index', 
            title: 'emnify Python SDK',
            description: 'The alpha release of the new emnify Python software development kit (SDK) for SIM state management and device connectivity operations.',
            slug: '/sdks/python'
          },
          items: [
            {
              type: 'doc',
              label: 'Getting started',
              id: 'sdks/python/getting-started'
            },
            'sdks/python/concepts',
            'sdks/python/examples',
            'sdks/python/help',
            {
              type: 'link',
              label: 'API Reference',
              href: 'https://emnify.github.io/emnify-sdk-python/autoapi/index.html'
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Single Sign-On',
      link: { 
        
        type: 'generated-index', 
        description: 'With Single Sign-On (SSO) enabled, your organization can access the emnify Portal using your exist
        ing account credentials.',
        slug: '/sso',
        title: 'Single Sign-On'
      
      },
      items: [
        {
          type: 'doc',
          label: 'Microsoft Active Directory',
          id: 'sso/microsoft-active-directory'
        },
        {
          type: 'doc',
          label: 'Google Cloud Platform',
          id: 'sso/google-cloud-platform'
        },
        {
          type: 'doc',
          label: 'Troubleshooting',
          id: 'sso/troubleshooting'
        }
      ],
    },
    'glossary',
  ]
};

module.exports = sidebars;
