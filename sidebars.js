/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'quickstart',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      collapsible: false,
      link: { type: 'doc', id: 'getting-started/what-is-time-series' },
      items: [
        'getting-started/what-is-time-series',
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/make-a-model-projectable',
        'getting-started/implement-a-projection',
        'getting-started/available-periods',
        'getting-started/available-events',
        'getting-started/query-your-projections',
      ],
    },
  ]
};

module.exports = sidebars;
