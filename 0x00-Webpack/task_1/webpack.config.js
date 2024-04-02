const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./js/dashboard_main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
	},
	mode: "production",
};
