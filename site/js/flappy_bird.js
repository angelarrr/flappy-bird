var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipe');

var bird = require('./entities/bird');
var pipeTop = require('./entities/pipeTop');
var pipeBottom = require('./entities/pipeBottom');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');

var FlappyBird = function() {
	this.entities = [new bird.Bird(), new floor.Floor(), new ceiling.Ceiling(), new pipeTop.PipeTop(), new pipeBottom.PipeBottom()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
	this.physics = new physicsSystem.PhysicsSystem(this.entities);
	this.inputs = new inputSystem.InputSystem(this.entities);
	// this.pipes = new pipeSystem.PipeSystem(this.entities);
};

FlappyBird.prototype.run = function() {
	this.graphics.run();
	this.physics.run();
	this.inputs.run();
	// this.pipes.run();
};

exports.FlappyBird = FlappyBird;