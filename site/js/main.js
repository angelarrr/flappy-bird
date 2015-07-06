var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
	var startButton = document.getElementById("start");
	var startDiv = document.getElementById("game-start");
	var restartButton = document.getElementById("restart");
	var app = new flappyBird.FlappyBird();
	window.flappy = app;

	startButton.addEventListener('click', function() {
		app.run();
		startDiv.style.visibility = "hidden";
	});

	startButton.addEventListener('touchstart', function() {
		app.run();
		startDiv.style.visibility = "hidden";
	});
	
});