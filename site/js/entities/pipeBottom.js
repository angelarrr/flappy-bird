var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var PipeBottom = function() {

	this.size = {
		x: 0.2,
		y: 0.4
	};

	var physics = new physicsComponent.PhysicsComponent(this);
		physics.position.x = 0.8;
		physics.position.y = 0;
		physics.acceleration.x = -0.25;

	var graphics = new graphicsComponent.PipeGraphicsComponent(this);
	this.components = {
		physics: physics,
		graphics: graphics
	};

	console.log("Creating bottom pipe entity");
};

exports.PipeBottom = PipeBottom;