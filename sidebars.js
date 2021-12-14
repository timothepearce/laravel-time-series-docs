/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'quickstart',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      collapsible: false,
      items: [
        'getting-started/introduction',
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
