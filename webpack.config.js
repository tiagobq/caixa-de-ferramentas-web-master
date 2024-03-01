
const path = require("path");

const cssLoader = {
    test: /\.css$/i,
    include: path.resolve(__dirname, "src"),
    use: ["style-loader", "css-loader", "postcss-loader"],
    };
    

module.exports = {
entry: "./src/js/index.js", 
output: {
path: path.resolve(__dirname, "dist"),
filename: "bundle.js",
},
deServer: { static: "./dist" },
plugins: [],
module: {},
};