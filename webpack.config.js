const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
console.clear();
module.exports = {
    mode: "none",
    entry: "./src/index.js",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
        // order its importent and order its reverse
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }, ],
    },
    output: {
        filename: "main.bundel-[contentHash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Custom template",
            // Load a custom template (lodash by default)
            template: "./src/templateFile/template.html",
        }),
    ],
};