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
};

FlappyBird.prototype.run = function() {
	this.graphics.run();
	this.physics.run();
	this.inputs.run();
	this.pipes.run();
};

exports.FlappyBird = FlappyBird;