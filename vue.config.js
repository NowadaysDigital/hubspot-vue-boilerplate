const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin');
const { defineConfig } = require('@vue/cli-service');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const defaultPortal = 'dev';
const destination = 'hubspot-vue-boilerplate';

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.devServer.writeToDisk = true;
    // Clear rules
    config.module.rules.delete('svg');
    config.module.rules.delete('images');

    // Inject images into html with byte64 string
    config.module
      .rule('file-injection')
      .test(/\.(png|jpg|gif|svg)$/)
      .use('url-loader')
      .loader('url-loader')
      .end();

    // Webpack html plugin config
    config.plugin('html').tap((args) => {
      args[0].inject = false;
      args[0].minify = false;
      args[0].filename = 'templates/layouts/index.html';
      args[0].publicPath = '../../';
      return args;
    });

    config.plugin('autoupload').use(HubSpotAutoUploadPlugin, [
      {
        portal: defaultPortal,
        autoupload: true,
        src: 'dist',
        dest: destination,
      },
    ]);

    config.plugin('webpack-copy').use(CopyWebpackPlugin, [
      {
        patterns: [
          { from: 'src/assets', to: 'assets' },
          {
            from: 'src/modules',
            to: 'modules',
            globOptions: {
              dot: true,
              ignore: ['**/*.vue'],
            },
          },
          { from: 'src/templates', to: 'templates' },
          { from: 'src/theme.json', to: 'theme.json' },
          { from: 'src/fields.json', to: 'fields.json' },
        ],
      },
    ]);
  },
});
