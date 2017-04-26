const buildFile = require('./build-file');

buildFile({
	entry: 'web-main.js',
	target: 'web',
	output: 'web.js'
}, (err, stats) => {
	console.log(stats.toString({ colors: true }));
});