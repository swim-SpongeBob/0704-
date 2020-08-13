const path = require("path");

//下面双引号里面的内容随便改，但要符合规则，最好不要改
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
