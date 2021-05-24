let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index-bundle.js",
  },
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, "./src"),
    contentBase: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.css/,
        // use: ["style-loader"]
        use: ["style-loader", "css-loader"]
        // use: {
        //   loader: ["style-loader", "css-loader"]
        // }
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       // loader: "url-loader?name=src/images[name].[ext]",
      //       options: {
      //         limit: false
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        // include: "./src/images/",
        include: "/home/abappy/Documents/odin project/React Workouts/assignments/Memory_Game/src/images",
        // include: "src/images/",
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            outputPath: "./images/"
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      title: "React App Boilerplate Code With Webpack",
      favicon: "./src/logo.svg"
    }),
  ],
};
