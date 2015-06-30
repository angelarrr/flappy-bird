var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
	var startButton = document.getElementById("start");
	var startDiv = document.getElementById("game-start");
	var app = new flappyBird.FlappyBird();

	startButton.addEventListener('click', function() {
		app.run();
		startDiv.style.visibility = "hidden";
	});
	
});