// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const external = require('./external.config');
const common = require('../common/docusaurus.config');
const internal = require('./internal.config');

module.exports = {
  ...common,
  ...internal,
  themes: [
    ...common.themes,
  ],
  plugins: [
    ...external.plugins,
    ...common.plugins,
    ...internal.plugins,
  ],
  staticDirectories: [
    ...external.staticDirectories,
    ...common.staticDirectories,
    ...internal.staticDirectories,
  ],
};
