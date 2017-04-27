import Puzzle from './game/Puzzle';
import prompt from './util/prompt';
import instructions from './game/instructions';
import clc from 'cli-color';

function promptForInput() {
	prompt('> ', handleInput);
}

function handleInput(input) {
	//create the puzzle
	let parts = input.split(' ');
	let target = parts[0] || '';
	let symbols = parts[1] || target;
	let maxSolutionLength = parseInt(parts[2]) || 7;
	let stack = [
		new Puzzle({
			target: target,
			symbols: symbols
		})
	];
	//find solutions
	let solutions = [];
	while (stack.length > 0) {
		let puzzle = stack.shift();
		let prevInstruction = puzzle.instructions[puzzle.instructions.length - 1];
		for (let key in instructions) {
			if ((key !== 'l' || prevInstruction !== 'r') && (key !== 'r' || prevInstruction !== 'l')) {
				let puzzle2 = puzzle.clone();
				if (puzzle2.applyInstruction(key)) {
					if (puzzle2.isSolved()) {
						solutions.push(puzzle2);
					} else if (puzzle2.instructions.length < maxSolutionLength) {
						stack.push(puzzle2);
					}
				}
			}
		}
	}
	console.log('Solutions: ' + solutions.map(x => {
		return x.instructions;
	}).join(', '));
	//prompt for more input
	promptForInput();
}

console.log('Enter puzzles');
console.log(clc.blackBright(' e.g. morning nmoring 10'));
promptForInput();
