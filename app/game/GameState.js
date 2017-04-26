import Puzzle from './Puzzle';

function GameState(params) {
	this.puzzle = new Puzzle({
		target: 'morning',
		symbols: 'nmoring'
	});
}

export default GameState;