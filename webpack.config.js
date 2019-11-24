const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    target: "node",
    entry: {
      app: ["./tests/module/module_test.js"]
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "bundle-back.js"
    },
    optimization: {
        minimize: false
    },
    node: {
        __dirname: true
    },
    module: {
        rules: [
          {
            test: /\.node$/,
            use: 'node-loader'
          },
          {
            test: /\.*$/,
            exclude: [
                path.resolve(__dirname, "./phantom")
            ]
          }
        ]
    },
    plugins: [
        new CopyPlugin([
          { from: path.resolve(__dirname, "./phantom"), to: path.resolve(__dirname, "./build/phantom")},
          { from: path.resolve(__dirname, "./node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs.exe"), to: path.resolve(__dirname, "./build/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs.exe")}
        ]),
    ]
  };