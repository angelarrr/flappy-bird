var flappyBird = require('./flappy_bird');

document.addEventListener('DOMContentLoaded', function() {
	var app = new flappyBird.FlappyBird();
	var pipeApp = new flappyBird.Pipe();
	app.run();
	pipeApp.run();
});