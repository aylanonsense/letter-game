const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = (params, callback) => {
	//create a webpack compiler
	const compiler = webpack({
		entry: path.join(__dirname, '..', 'app', params.entry),
		target: params.target,
		devtool: 'source-map',
		output: {
			path: path.join(__dirname, '..', 'build'),
			filename: params.output
		}
	});
	//build the file
	compiler.run((err, stats) => {
		//handle errors and warnings
		if (err) {
			console.error(err.stack || err);
			if (err.details) {
				console.error(err.details);
			}
		}
		else {
			const info = stats.toJson();
			if (stats.hasErrors()) {
				console.error(info.errors);
			}
			if (stats.hasWarnings()) {
				console.warn(info.warnings);
			}
		}
		if (callback) {
			callback(err, stats);
		}
	});
};