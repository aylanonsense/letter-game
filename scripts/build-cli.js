const buildFile = require('./build-file');

buildFile({
	entry: 'cli-main.js',
	target: 'node',
	output: 'cli.js'
}, (err, stats) => {
	console.log(stats.toString({ colors: true }));
});