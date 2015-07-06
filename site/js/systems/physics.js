var collisionSystem = require("./collision");

var PhysicsSystem = function(entities){
	this.entities = entities;
	this.collisionSystem = new collisionSystem.CollisionSystem(entities);
	this.pause = false;
};

PhysicsSystem.prototype.run = function() {
	// run the update loop
	window.setInterval(this.tick.bind(this), 1000/60);
};

PhysicsSystem.prototype.tick = function() {
	if (!this.pause) {
		for (var i=0; i<this.entities.length; i++) {
			var entity = this.entities[i];
			if (!'physics' in entity.components) {
			continue;
			}
		entity.components.physics.update(1/60);
		}

		this.collisionSystem.tick();
	}

};

exports.PhysicsSystem = PhysicsSystem;