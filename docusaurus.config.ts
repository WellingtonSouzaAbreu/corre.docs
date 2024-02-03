import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'corre.',
  tagline: 'Nova documentação do app',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'corre.',
      logo: {
        alt: ' Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          to: 'https://github.com/corre-social/mobile/tree/dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Corre Social',
              href: 'https://www.google.com/search?client=safari&rls=en&q=corre+social&ie=UTF-8&oe=UTF-8',
            }
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Fale Conosco',
              href: 'https://www.google.com/search?client=safari&rls=en&q=corre+social&ie=UTF-8&oe=UTF-8',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Saiba mais',
              href: 'https://www.google.com/search?client=safari&rls=en&q=corre+social&ie=UTF-8&oe=UTF-8',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} corre.`,
      logo: {
        alt: ' Logo',
        src: 'img/logo.svg',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
