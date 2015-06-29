var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeBottom = function() {
	this.color = "green";
	this.size = {
		x: 0.2,
		y: 0.4
	};

	var physics = new physicsComponent.PhysicsComponent(this);
		physics.position.x = 1.5;
		physics.position.y = 0;
		physics.velocity.x = -0.25;

	var graphics = new graphicsComponent.RectGraphicsComponent(this);
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