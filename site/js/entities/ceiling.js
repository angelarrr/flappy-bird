var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Ceiling = function() {
	this.color = "blue";
	this.size = {
		x: 1,
		y: 0.01
	};

	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 0;
	physics.position.y = 1;

	var graphics = new graphicsComponent.RectGraphicsComponent(this, this.size);
	var collision = new collisionComponent.RectCollisionComponent(this, this.size);
	// collision.onCollision = this.onCollision.bind(this);

	this.components = {
		physics: physics,
		graphics: graphics,
		collision: collision
	};
};

Ceiling.prototype.onCollision = function(entity) {
	console.log("ceiling collided with entity:", entity);
};

exports.Ceiling = Ceiling;