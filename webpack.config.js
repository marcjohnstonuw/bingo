module.exports = {
	entry: "./app/Main.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [ 
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	historyApiFallback: true
}