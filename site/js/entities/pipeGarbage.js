var graphicsComponent = require("../components/graphics/rect");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeGarbage = function() {
	this.color = "white";
	this.size = {
		x: 0.01,
		y: 1
	};

	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = -(document.getElementById('main-canvas').width/200);
	physics.position.y = 0;

	var graphics = new graphicsComponent.RectGraphicsComponent(this, this.size);
	var collision = new collisionComponent.RectCollisionComponent(this, this.size);
	// collision.onCollision = this.onCollision.bind(this);

	this.components = {
		physics: physics,
		graphics: graphics,
		collision: collision
	};
};

PipeGarbage.prototype.onCollision = function(entity) {
	console.log("garbage can collided with entity:", entity);
};

exports.PipeGarbage = PipeGarbage;