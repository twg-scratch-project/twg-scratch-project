const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "bundle.js",
  },
  devServer: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    static: {
      directory: __dirname,
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
    ],
  },
};
