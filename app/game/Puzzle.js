import instructions from './instructions';

function Puzzle(params) {
	this.target = params.target;
	this.symbols = params.symbols;
	this.cursor = params.cursor || 0;
	this.instructions = params.instructions || '';
}
Puzzle.prototype.clone = function() {
	return new Puzzle({
		target: this.target,
		symbols: this.symbols,
		cursor: this.cursor,
		instructions: this.instructions
	});
};
Puzzle.prototype.isSolved = function() {
	return this.symbols === this.target;
};
Puzzle.prototype.applyInstruction = function(key) {
	//make sure the instruction exists
	if (!instructions[key]) {
		return false;
	}
	//apply the transformation
	if (!instructions[key].exec(this)) {
		return false;
	}
	this.instructions += key;
	return true;
};

export default Puzzle;