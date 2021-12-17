/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'quickstart',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      collapsible: false,
      link: { type: 'doc', id: 'getting-started/what-is-quasar' },
      items: [
        'getting-started/what-is-quasar',
        'getting-started/installation',
        'getting-started/configuration',
      ],
    },
  ],

  apiSidebar: [
    'api/cli',
  ]
};

module.exports = sidebars;
