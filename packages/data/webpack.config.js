const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ProvidePlugin, DefinePlugin } = require('webpack');
const dotenv = require('dotenv');
const DotenvWebpackPlugin = require('dotenv-webpack');

const deps = require('./package.json').dependencies;

const envPaths = {
  production: path.resolve('./', `.env.production`),
  development: path.resolve('./', `.env.development`),
};

module.exports = (_, argv) => {
  const envPath = envPaths[argv.mode] || envPaths.development;

  require('dotenv').config({ path: envPath });

  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: argv.mode || 'development',

    output: {
      publicPath: 'http://localhost:3002/',
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: {
        process: 'process/browser',
      },
    },

    devServer: {
      port: 3002,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'data',
        filename: 'remoteEntry.js',
        remotes: {
          auth: 'auth@http://localhost:3001/remoteEntry.js',
        },
        exposes: {
          './Searchbar': './src/components/Searchbar',
          './pokemon': './src/hooks/pokemon',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            requiredVersion: deps['react-router-dom'],
            singleton: true,
          },
          axios: {
            requiredVersion: deps['axios'],
            singleton: true,
          },
          '@material-ui/styles': {
            singleton: true,
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      new ProvidePlugin({
        process: 'process/browser',
      }),
      new DotenvWebpackPlugin({
        safe: true,
        path: envPath,
      }),
      new DefinePlugin(envKeys),
    ],
  };
};
