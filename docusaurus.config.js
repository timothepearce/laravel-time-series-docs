// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laravel Quasar',
  tagline: 'Helps you build Eloquent-based data projections with ease.',
  url: 'https://laravel-quasar.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TimothePearce',
  projectName: 'laravel-quasar',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/timothepearce/laravel-quasar-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: `Laravel Quasar`,
        logo: {
          alt: 'Laravel Quasar logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/quickstart',
            position: 'left',
            label: 'Quickstart',
            activeBasePath: 'docs/quickstart',
          },
          {
            to: '/docs/getting-started/introduction',
            position: 'left',
            label: 'Docs',
            activeBasePath: 'docs/getting-started',
          },
          {
            to: '/docs/api/cli',
            position: 'left',
            label: 'API',
            activeBasePath: 'docs/api',
          },
          {
            href: 'https://github.com/timothepearce/laravel-quasar',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
        hideOnScroll: true,
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Designed and built by <a href="https://timpearce.com" target="__blank">Timothé Pearce</a>.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
