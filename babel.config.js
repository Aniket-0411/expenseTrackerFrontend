/** @type {import('@babel/core').TransformOptions['plugins']} */
const rootImportOpts = [
  {
    root: __dirname,
    rootPathPrefix: '~/',
    // mapping ~/ to the ./src directory
    rootPathSuffix: 'src',
  },
];

const plugins = [
  [
    'babel-plugin-root-import',
    {
      paths: rootImportOpts,
    },
  ],
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true,
    },
  ],
  '@babel/plugin-proposal-export-namespace-from',
  [
    "module:react-native-dotenv",
    {
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }
  ],
];

/** @type {import('@babel/core').TransformOptions} */
module.exports = function getBabelConfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {},
    },
    plugins,
  };
};
