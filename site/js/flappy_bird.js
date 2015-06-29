var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipe');
// var collisionSystem = require('./systems/collision');

var bird = require('./entities/bird');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');
var pipeGarbage = require('./entities/pipeGarbage');

var FlappyBird = function() {
	this.entities = [new bird.Bird(), new floor.Floor(), new ceiling.Ceiling(), new pipeGarbage.PipeGarbage()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
	this.physics = new physicsSystem.PhysicsSystem(this.entities);
	this.inputs = new inputSystem.InputSystem(this.entities);
	this.pipes = new pipeSystem.PipeSystem(this.entities);
	// this.collision = new collisionSystem.CollisionSystem(this.entities);
};

FlappyBird.prototype.run = function() {
	this.graphics.run();
	this.physics.run();
	this.inputs.run();
	this.pipes.run();
	// this.collision.run();
};

exports.FlappyBird = FlappyBird;