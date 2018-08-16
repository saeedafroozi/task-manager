var path = require('path');

require('es6-promise').polyfill();
module.exports = {

	entry: {
		BookTime: ['./Scripts/BookTime/index'],
		BookTimeList: ['./Scripts/BookTimeList/index'],
	},
	output: {
	  path: path.join(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	devtool: "source-map",
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		],

	},
	resolve: {
		alias: {
			'react': path.join(__dirname, 'node_modules', 'react')
		},
		extensions: ['', '.tsx', '.ts', '.js']
	},
	externals: {
		"jquery": "$",
	}
};