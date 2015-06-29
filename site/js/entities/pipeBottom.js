var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeBottom = function() {

	this.size = {
		x: 0.2,
		y: 0.4
	};

	var physics = new physicsComponent.PhysicsComponent(this);
		physics.position.x = 1;
		physics.position.y = 0;
		physics.acceleration.x = -0.15;

	var graphics = new graphicsComponent.PipeGraphicsComponent(this);
	var collision = new collisionComponent.RectCollisionComponent(this, this.size);
	collision.onCollision = this.onCollision.bind(this);
	
	this.components = {
		physics: physics,
		graphics: graphics,
		collision: collision
	};
};

PipeBottom.prototype.onCollision = function(entity) {
	console.log("Pipe bottom collided with entity:", entity);
};

exports.PipeBottom = PipeBottom;