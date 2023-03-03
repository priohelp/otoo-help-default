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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
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
            docId: 'wms/intro',
            position: 'left',
            label: 'WMS',
          },
          {
            type: 'doc',
            docId: 'ilnawa/intro',
            position: 'left',
            label: '근태관리',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
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
    }),
};

module.exports = config;
