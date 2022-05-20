var path = require("path");

module.exports = {
  entry: "./src/main/js/index.js",
  cache: true,
  mode: "development",
  output: {
    path: __dirname,
    filename: "./src/main/resources/static/built/bundle.js",
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, "."),
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },

      {
        // loader used for loading css files
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        // loader used for loading images
        test: /\.(png|jpg|gif)$/i,
        loader: "url-loader",
        options: {
          outputPath: "images",
        },
      },
      {
        // loader used for loading font files
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};
