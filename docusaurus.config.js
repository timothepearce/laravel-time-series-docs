// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laravel Quasar',
  tagline: 'Build Eloquent projections with ease.',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/timothepearce/laravel-quasar-docs/',
        },
        blog: false,
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
            to: '/quickstart',
            position: 'left',
            label: 'Quickstart',
            activeBasePath: 'docs/quickstart',
          },
          {
            to: '/getting-started/what-is-quasar',
            position: 'left',
            label: 'Docs',
            activeBasePath: 'docs/getting-started',
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
                label: 'What is Quasar?',
                to: '/getting-started/what-is-quasar',
              },
              {
                label: 'Quickstart',
                to: '/quickstart',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/timothepearce',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/timothepearce/laravel-quasar',
              },
            ],
          },
        ],
        copyright: `Designed and built by <a href="https://timpearce.me" target="__blank">Timothé Pearce</a>.`,
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
