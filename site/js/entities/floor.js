var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var Floor = function() {
	this.color = "brown";

	var size = {
		x: (document.getElementById('main-canvas').width),
		y: 0.01
	};

	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = 0;
	physics.position.y = 0;

	var graphics = new graphicsComponent.PipeGraphicsComponent(this, size);
	var collision = new collisionComponent.RectCollisionComponent(this, size);
	// collision.onCollision = this.onCollision.bind(this);

	this.components = {
		physics: physics,
		graphics: graphics,
		collision: collision
	};
};

Floor.prototype.onCollision = function(entity) {
	// console.log("floor collided with entity:", entity);
};

exports.Floor = Floor;