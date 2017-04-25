import randomNumber from './randomNumber.js';
import generateRandomNumber from './generateRandomNumber.js';
import $ from 'jquery';

$(() => {
	console.log('Running web-main.js', randomNumber, generateRandomNumber());
});