import clc from 'cli-color';

function CLIRenderer(params) {
	this.gameState = params.gameState;
}
CLIRenderer.prototype.render = function() {
	//draw the letters
	let target = this.gameState.puzzle.target;
	let symbols = this.gameState.puzzle.symbols;
	let text = '';
	for(let i = 0; i < symbols.length; i++) {
		if (i < target.length && symbols[i] === target[i]) {
			text += clc.green(symbols[i]);
		}
		else {
			text += symbols[i];
		}
	}
	console.log('  ' + text);
	//draw the cursor
	let cursorText = '';
	while(cursorText.length < this.gameState.puzzle.cursor) {
		cursorText += ' ';
	}
	cursorText += '^';
	console.log('  ' + cursorText);
};

export default CLIRenderer;