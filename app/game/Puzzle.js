function Puzzle(params) {
	this.target = params.target;
	this.cursor = params.cursor || 0;
	this.symbols = params.symbols;
}

export default Puzzle;