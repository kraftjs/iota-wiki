import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(path.resolve(
  process.cwd(),
  process.env.IOTA_WIKI_DIRECTORY,
  './docusaurus.config.js',
));

module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
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
  plugins: ['plugin-image-zoom', ...config.plugins],
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: path.resolve(__dirname, '../css/custom.css'),
      },
    ],
    path.resolve(__dirname, '../theme'),
  ],
  themeConfig: {
    image: 'img/iota-wiki.png',
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
        href: 'https://wiki.iota.org',
      },
      items: [],
    },
  },
  staticDirectories: [
    path.resolve(__dirname, '../static'),
    ...config.staticDirectories,
  ],
};
