const buildFile = require('./build-file');

buildFile({
	entry: 'mainCLI.js',
	target: 'node',
	output: 'cli.js'
}, (err, stats) => {
	console.log(stats.toString({ colors: true }));
});