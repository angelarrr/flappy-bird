var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipe');
var scoreSystem = require('./systems/score');

var bird = require('./entities/bird');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');
var pipeGarbage = require('./entities/pipeGarbage');
var scoreKeeper = require('./entities/score');

var FlappyBird = function() {
	this.entities = [new bird.Bird(), new floor.Floor(), new ceiling.Ceiling(), new pipeGarbage.PipeGarbage(), new scoreKeeper.ScoreKeeper()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
	this.physics = new physicsSystem.PhysicsSystem(this.entities);
	this.inputs = new inputSystem.InputSystem(this.entities);
	this.pipes = new pipeSystem.PipeSystem(this.entities);
	this.pause = false;
};

FlappyBird.prototype.run = function() {
	this.graphics.run();
	this.physics.run();
	this.inputs.run();
	this.pipes.run();
};

FlappyBird.prototype.paused = function(restart, nextCall) {
	this.resume = nextCall;
	this.pause = !this.pause;
	this.graphics.pause = this.pause;
	this.inputs.pause = this.pause;
	this.pipes.pause = this.pause;
	this.graphics.pauseText = restart || 'GAME PAUSED';

	if (this.resume) {
		this.resume();
	}
};

FlappyBird.prototype.reset = function() {
	this.entities.splice(5, this.entities.length - 5);

	var bird = this.entities[0];
	bird.components.physics.position.y = 0.5;
	bird.components.physics.position.x = 0;
	bird.components.physics.velocity.y = 0;
};

exports.FlappyBird = FlappyBird;