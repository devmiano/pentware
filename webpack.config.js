const path = require('path');

module.exports = {
	mode: 'development',
	entry: ['babel-polyfill', path.resolve(__dirname, 'frontend/src/global.tsx')],
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['@babel/preset-env'] },
				},
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'frontend/src/'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: 'file-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'frontend/static/frontend/public/'),
		publicPath: '/static/frontend/public/',
		filename: 'global.js',
	},
};
