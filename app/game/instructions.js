export default {
	'l': {
		name: 'left',
		exec: puzzle => {
			//can't move left if we're already at the leftmost symbol
			if (puzzle.cursor < 1) {
				return false;
			}
			puzzle.cursor -= 1;
			return true;
		}
	},
	'r': {
		name: 'right',
		exec: puzzle => {
			//can't move right if we're already at the rightmost symbol
			let numSymbols = puzzle.symbols.length;
			if (puzzle.cursor >= numSymbols - 1) {
				return false;
			}
			puzzle.cursor += 1;
			return true;
		}
	},
	'd': {
		name: 'delete',
		exec: puzzle => {
			//can't delete unless we have at least one symbol
			let numSymbols = puzzle.symbols.length;
			if (numSymbols < 1) {
				return false;
			}
			//create new symbols without the deleted one
			let symbols = '';
			for (let i = 0; i < puzzle.symbols.length; i++) {
				if (i !== puzzle.cursor) {
					symbols += puzzle.symbols[i];
				}
			}
			puzzle.symbols = symbols;
			puzzle.cursor = Math.max(0, puzzle.cursor - 1); //TODO should the cursor stay in the same spot?
			return true;
		}
	},
	's': {
		name: 'swap',
		exec: puzzle => {
			//can't swap unless we have at least two symbols
			let numSymbols = puzzle.symbols.length;
			if (numSymbols < 2) {
				return false;
			}
			//perform the swap
			if (puzzle.cursor < numSymbols - 1) {
				puzzle.symbols =
					puzzle.symbols.substr(0, puzzle.cursor) +
					puzzle.symbols[puzzle.cursor + 1] +
					puzzle.symbols[puzzle.cursor] +
					puzzle.symbols.substr(puzzle.cursor + 2);
				puzzle.cursor += 1;
			} else {
				//special case if the cursor is at the last symbol
				puzzle.symbols =
					puzzle.symbols[puzzle.cursor] +
					puzzle.symbols.substr(1, puzzle.cursor - 1) +
					puzzle.symbols[0];
				puzzle.cursor = 0;
			}
			return true;
		}
	},
	'f': {
		name: 'flip',
		exec: puzzle => {
			//can't flip unless we have at least two symbols
			let numSymbols = puzzle.symbols.length;
			if (numSymbols < 2) {
				return false;
			}
			//reverse the symbols
			let symbols = '';
			for(let i = puzzle.symbols.length - 1; i >= 0; i--) {
				symbols += puzzle.symbols[i];
			}
			puzzle.symbols = symbols;
			return true;
		}
	}
};