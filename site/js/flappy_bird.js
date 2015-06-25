var graphicsSystem = require('./systems/graphics');
var bird = require('./entities/bird');
var pipe = require('./entities/pipe');

var FlappyBird = function() {
	this.entities = [new bird.Bird()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

var Pipe = function() {
	this.entities = [new pipe.Pipe()];
	this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
	this.graphics.run();
};

Pipe.prototype.run = function() {
	this.graphics.run();
};

exports.FlappyBird = FlappyBird;
exports.Pipe = Pipe;