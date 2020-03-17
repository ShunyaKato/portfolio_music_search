const path = require("path");

const outputPath = path.resolve(__dirname, "dist")

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              plugins: [
                // Autoprefixerを有効化
                // ベンダープレフィックスを自動付与する
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: '.images/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
};