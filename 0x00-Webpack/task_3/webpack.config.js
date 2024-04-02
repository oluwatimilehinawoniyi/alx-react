const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	devtool: "inline-source-map",
	entry: {
		header: "./modules/header/header.js",
		body: "./modules/body/body.js",
		footer: "./modules/footer/footer.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "public"),
	},
	devServer: {
		static: path.join(__dirname, "./public"),
		port: 8564,
		open: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Development",
			filename: "./index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassingOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	mode: "development",
	performance: {
		hints: false,
	},
};
