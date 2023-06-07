const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chat.bundle.js'
  },
  resolve: {
    extensions: [".ts", ".js", ".hbs"],
    alias: {
      'express-handlebars': 'handlebars/dist/handlebars.js',
      'ejs': 'ejs.min.js'
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jpe?g|gif)$/i,
        type: "asset/inline",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*",
          context: path.resolve(__dirname, "src"),
          to: "./assets",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./static/index.html",
      filename: "index.html",
    }),
  ],
};
