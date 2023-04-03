const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const GlobImporter = require("node-sass-glob-importer");
require("dotenv").config();

const prod = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.resolve(__dirname, "..", "..", "index.tsx"),
  devServer: {
    port: process.env.PORT,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "*"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: prod
                  ? "[hash:base64:5]"
                  : "[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sassOptions: { importer: GlobImporter() } },
          },
        ],
        include: /\.module\.s[ac]ss$$/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sassOptions: { importer: GlobImporter() } },
          },
        ],
        exclude: /\.module\.s[ac]ss$$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name]_[hash:5][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "..", "index.html"),
    }),
  ].concat(
    prod
      ? [new MiniCssExtractPlugin({ filename: "assets/css/app.min.css" })]
      : []
  ),
  output: {
    clean: true,
    path: path.resolve(__dirname, "..", "..", "..", "dist"),
    filename: "assets/js/bundle.js",
  },
};
