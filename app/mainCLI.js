import GameState from './game/GameState';
import CLIRenderer from './render/CLIRenderer';
import clc from 'cli-color';
import process from 'process';

let stdin = process.openStdin();

//create game vars
let isAcceptingInput = false;
let gameState = new GameState({
	target: 'morning',
	symbols: 'nmoring'
});
let renderer = new CLIRenderer({
	gameState: gameState
});

//create main functions
function renderGameState() {
	renderer.render();
}

function promptForInput() {
	process.stdout.write('> ' + clc.blackBright('sllssrs'));
	isAcceptingInput = true;
}

function handleInput(input) {
	if (isAcceptingInput) {
		isAcceptingInput = false;
		console.log('Input:', input);
	}
}

//begin basic game loop
renderGameState();
promptForInput();
stdin.addListener('data', d => {
	handleInput(d.toString().trim());
	renderGameState();
	promptForInput();
});
