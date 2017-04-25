const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

//get a list of external files that we don't want to bundle
const nodeModules = {};
fs.readdirSync('node_modules')
	.filter(x => {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(x => {
		nodeModules[x] = 'commonjs ' + x;
	});

//create a webpack compiler
const compiler = webpack({
	entry: path.join(__dirname, 'app', 'cli-main.js'),
	target: 'node',
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'cli.js'
	},
	externals: nodeModules
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
	//load the main module
	require(path.join(__dirname, 'build', 'cli.js'));
});
