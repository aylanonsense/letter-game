const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

//create a webpack compiler
const compiler = webpack({
	entry: path.join(__dirname, 'app', 'web-main.js'),
	target: 'web',
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'web.js'
	}
});

//build cmd-main.js, rebuilding whenever something changes
compiler.run((err, stats) => {
	//handle errors and warnings
	if (err) {
		console.error(err.stack || err);
		if (err.details) {
			console.error(err.details);
		}
		return;
	}
	const info = stats.toJson();
	if (stats.hasErrors()) {
		console.error(info.errors);
	}
	if (stats.hasWarnings()) {
		console.warn(info.warnings);
	}
	//print results
	console.log(stats.toString({ colors: true }));
});
