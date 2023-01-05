// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainDocsSidebar: [
    'cellular-iot',
    'quickstart',
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
