var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var PipeGarbage = function() {
	this.color = "white";
	var size = {
		x: 0.01,
		y: (document.getElementById('main-canvas').height)
	};

	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = -(document.getElementById('main-canvas').width/200);
	physics.position.y = 0;

	var graphics = new graphicsComponent.PipeGraphicsComponent(this, size);
	var collision = new collisionComponent.RectCollisionComponent(this, size);
	collision.onCollision = this.onCollision.bind(this);

	this.components = {
		physics: physics,
		graphics: graphics,
		collision: collision
	};
};

PipeGarbage.prototype.onCollision = function(entity) {
	// console.log("garbage can collided with entity:", entity);
};

exports.PipeGarbage = PipeGarbage;