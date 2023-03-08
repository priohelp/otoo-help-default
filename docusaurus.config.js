// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OTOO',
  tagline: 'OTOO Cloud 사용자 메뉴얼',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.otoowms.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.a
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'priohelp', // Usually your GitHub org/user name.
  projectName: 'otoo-help-default', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',      
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  markdown: {
    mermaid: true,
  },
  
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    ({
      navbar: {
        title: 'OTOO HELP',
        logo: {
          alt: 'OTOO help Logo',
          src: 'img/logo/otoo.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/wms',
            position: 'left',
            label: 'WMS',
          },
          {
            type: 'doc',
            docId: 'ilnawa/intro',
            position: 'left',
            label: '근태관리',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Menual',
            items: [
              {
                label: '소개',
                to: '/docs/intro',
              },
              {
                label: 'WMS',
                to: '/docs/wms/intro',
              },
              {
                label: '근태관리',
                to: '/docs/ilnawa/intro',
              },
            ],
          },
          {
            title: 'Homepage',
            items: [
              {
                label: '프리오',
                href: 'http://prio.co.kr/',
              },
              {
                label: 'OTOO Solution',
                href: 'http://www.otoosolution.com/',
              },
              {
                label: '일나와',
                href: 'http://www.ilnawa.co.kr/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PRIO. All right reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        //... other Algolia params
      },
    }),
};
module.exports = config;