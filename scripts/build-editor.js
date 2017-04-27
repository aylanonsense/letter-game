const buildFile = require('./build-file');

buildFile({
	entry: 'mainEditor.js',
	target: 'node',
	output: 'editor.js'
}, (err, stats) => {
	console.log(stats.toString({ colors: true }));
});