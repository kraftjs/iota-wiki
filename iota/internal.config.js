// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA and Shimmer',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    announcementBar: {
      id: 'govern',
      content:
        'If you would like to get more involved in the future governance of Shimmer, IOTA, and the Assembly network, join the discussions with the community in our <a target="_blank" href="https://govern.iota.org">governance forum</a> 🏛️',
      backgroundColor: '#5991c7',
      textColor: '#ffffff',
      isCloseable: true,
    },
    image: 'img/iota-wiki.png',
    algolia: {
      appId: 'YTLE56KAO4',
      apiKey: '75358d60d302f7f93f630d63128abb03',
      indexName: 'iota',
      contextualSearch: true,
    },
    matomo: {
      matomoUrl: 'https://matomo.iota-community.org/',
      siteId: '13',
    },
    hotjar: {
      applicationId: '2809821',
    },
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    imageSlider: {
      videoPlaceholder: '/img/infographics/video-placeholder.png',
    },
    prism: {
      additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: 'About IOTA',
          to: 'learn/about-iota/an-introduction-to-iota',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Wallets',
          to: '/wallets/what-is-a-wallet',
          activeBaseRegex: '^/wallets/.*',
          type: 'dropdown',
          items: [
            {
              label: 'Firefly',
              href: '/wallets/firefly/general',
            },
            {
              label: 'Tangle Pay',
              href: 'https://tanglepay.com/',
            },
          ],
        },
        {
          label: 'Smart Contracts',
          to: 'smart-contracts/overview',
          activeBaseRegex: '^/smart-contracts/.*',
        },
        {
          label: 'Networks',
          to: 'networks/iota-1.5-chrysalis',
          activeBaseRegex: '^/networks/.*|^/introduction/.*',
          type: 'dropdown',
          items: [
            {
              label: 'IOTA',
              href: '/introduction/welcome',
            },
            {
              label: 'Shimmer',
              href: '/introduction/develop/welcome',
            },
          ],
        },
        {
          label: 'Libraries',
          to: '/#libraries',
          activeBaseRegex:
            '^(/categories)?/libraries.*|^/identity.rs/.*|^/iota.rs/.*|^/iotajs/.*|^/wallet.rs/.*|^/streams/.*|^/stronghold.rs/.*',
          type: 'dropdown',
          items: [
            {
              label: 'Client.rs',
              href: '/iota.rs/welcome',
            },
            {
              label: 'Client.js',
              href: '/iotajs/welcome',
            },
            {
              label: 'Identity',
              to: '/identity.rs/introduction',
            },
            {
              label: 'Streams',
              to: '/streams/welcome',
            },
            {
              label: 'Stronghold',
              to: '/stronghold.rs/welcome',
            },
            {
              label: 'Wallet.rs',
              to: '/wallet.rs/welcome',
            },
          ],
        },
        {
          label: 'Nodes',
          to: '/nodes/about-nodes',
          activeBaseRegex:
            '^/nodes/.*|^/hornet/.*|^/bee/.*|^/inx-.*/.*|^/chronicle.rs/.*',
          type: 'dropdown',
          items: [
            {
              label: 'Bee',
              href: '/bee/welcome',
            },
            {
              label: 'Hornet',
              href: '/hornet/welcome',
            },
          ],
        },
        {
          label: 'Research',
          to: 'research/research-outline',
          activeBaseRegex:
            '^/research/.*|^/IOTA-2.0-Research-Specifications/.*|^/goshimmer/.*',
          type: 'dropdown',
          items: [
            {
              label: 'Coordicide Specs',
              href: '/IOTA-2.0-Research-Specifications/Preface',
            },
            {
              label: 'GoShimmer',
              href: '/goshimmer/welcome',
            },
          ],
        },
        {
          label: 'Developer Resources',
          to: '/#developer-resources',
          activeBaseRegex: '^/tutorials/.*|^/integration-services/.*',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'About IOTA',
          items: [
            {
              label: 'Introduction',
              to: 'learn/about-iota/an-introduction-to-iota',
            },
            {
              label: 'IOTA token',
              to: 'learn/iota-token/buying-iota',
            },
            {
              label: 'Glossary',
              to: 'learn/glossary',
            },
            {
              label: "FAQ's",
              to: 'learn/faqs',
            },
            {
              label: 'Use cases',
              to: 'learn/use-cases/data-confidence',
            },
            {
              label: 'Funding',
              to: 'learn/funding/edf-funding',
            },
            {
              label: 'Partnerships',
              href: 'https://www.iota.org/solutions/partnerships',
            },
            {
              label: 'The community',
              to: 'learn/the-community/discord',
            },
          ],
        },
        {
          title: 'Networks',
          items: [
            {
              label: 'IOTA 1.5 Chrysalis',
              to: 'networks/iota-1.5-chrysalis',
            },
            {
              label: 'IOTA 2.0 Coordicide',
              to: 'networks/iota-2.0-coordicide',
            },
            {
              label: 'Testnets',
              to: 'networks/testnets',
            },
            {
              label: 'Token migration',
              to: 'networks/network-token-migration',
            },
          ],
        },
        {
          title: 'Libraries',
          items: [
            {
              label: 'Introduction',
              to: 'libraries/introduction',
            },
            {
              label: 'Client',
              to: 'iota.rs/welcome',
            },
            {
              label: 'JS Client',
              to: 'iotajs/welcome',
            },
            {
              label: 'Wallet',
              to: 'wallet.rs/welcome',
            },
            {
              label: 'Streams',
              to: 'libraries/streams',
            },
            {
              label: 'Identity',
              to: 'libraries/identity',
            },
            {
              label: 'Stronghold',
              to: 'libraries/stronghold',
            },
          ],
        },
        {
          title: 'Smart contracts',
          items: [
            {
              label: 'Overview',
              to: 'smart-contracts/overview',
            },
            {
              label: 'Core concepts',
              to: 'smart-contracts/guide/core_concepts/smart-contracts',
            },
            {
              label: 'Chains and nodes',
              to: 'smart-contracts/guide/chains_and_nodes/running-a-node',
            },
            {
              label: 'Wasm VM',
              to: 'smart-contracts/guide/wasm_vm/intro',
            },
            {
              label: 'Ethereum VM',
              to: 'smart-contracts/guide/evm/introduction',
            },
            {
              label: 'Example projects',
              to: 'smart-contracts/guide/example_projects/fair_roulette',
            },
            {
              label: 'Tools',
              to: 'smart-contracts/guide/development_tools/docker_preconfigured',
            },
            {
              label: 'Metrics',
              to: 'smart-contracts/metrics',
            },
          ],
        },
        {
          title: 'Wiki',
          items: [
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Github',
              href: 'https://github.com/iota-wiki/iota-wiki',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'Community blog',
              to: 'blog',
            },
            {
              label: 'Contribute',
              to: 'learn/contribute-to-wiki/welcome',
            },
            {
              label: 'Imprint',
              to: 'https://www.iota.org/impressum',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.iota.org/privacy-policy',
            },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/footer_logo.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus.`,
    },
    socials: [
      {
        url: 'https://www.youtube.com/c/iotafoundation',
        backgroundColor: 'var(--ifm-color-gray-900)',
      },
      {
        url: 'https://www.github.com/iotaledger/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://discord.iota.org/',
        backgroundColor: '#4B576F',
      },
      {
        url: 'https://www.twitter.com/iota/',
        backgroundColor: '#6A768E',
      },
      {
        url: 'https://www.reddit.com/r/iota/',
        backgroundColor: '#7D89A1',
      },
      {
        url: 'https://www.linkedin.com/company/iotafoundation/',
        backgroundColor: '#8995AD',
      },
      {
        url: 'https://www.instagram.com/iotafoundation/',
        backgroundColor: '#99A5BD',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
    },
  },
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-hotjar',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iota',
        path: '..',
        routeBasePath: '/',
        sidebarPath: './sidebars.ts',
        include: ['./common/docs/**/*.{md,mdx}', './iota/docs/**/*.{md,mdx}'],

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
  ],
  staticDirectories: ['./static'],
};
