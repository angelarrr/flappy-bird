var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/rect");

var ScoreKeeper = function() {
	this.color = "#87CEFA";
	
	var size = {
		x: 0.0001,
		y: 1
	};

	var physics = new physicsComponent.PhysicsComponent(this);
	physics.position.x = -0.25;
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

ScoreKeeper.prototype.onCollision = function(entity) {
	// console.log("keep score");
};

exports.ScoreKeeper = ScoreKeeper;