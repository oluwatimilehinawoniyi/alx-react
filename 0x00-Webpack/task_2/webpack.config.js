const path = require("path");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
	entry: "./js/dashboard_main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
	// plugins: [
	// 	new ImageMinimizerPlugin({
	// 		minimizerOptions: {
	// 			plugins: [
	// 				["jpegtran", { progressive: true }],
	// 				["optipng", { optimizationLevel: 5 }],
	// 			],
	// 		},
	// 	}),
	// ],
	mode: "production",
	performance: {
		hints: false,
	},
};
